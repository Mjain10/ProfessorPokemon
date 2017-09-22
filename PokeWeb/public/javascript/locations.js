/*jslint browser: true*/
/*jslint devel: true */
/*global $, jQuery, alert, console*/

function locationSubmit() {
    "use strict";
    event.preventDefault();
    
    var param = document.getElementById('location').value.toLowerCase();
    var regionURL = 'http://pokeapi.co/api/v2/region/' + param;
    
    $.getJSON(regionURL, function(data) {
        
        var regionName = data.names[4].name;
        var mainGen = data.main_generation.name.split('-');
        
        var cityURLList = [];
            
        for (var i = 0; i < data.locations.length; i++) {
            cityURLList.push(data.locations[i].url);
        }
        
        
        var promises = [];

        for (var i = 0; i < cityURLList.length; i++) {
            promises.push($.getJSON(cityURLList[i]));
        }
        
        $.when.apply($, promises).then(function(){
            var cityNameList = [];

            for(var j = 0; j < arguments.length; j++){
                // arguments[i][0] is needed because each argument
                // is an array of 3 elements.
                // The data, the status, and the jqXHR object
                cityNameList.push(arguments[j][0].names[0].name);
            }
        
        
        var p = ''
                
        p += '<p class = "title">' + regionName + '</p>';
        p += '<div class = "info_container"><ul id = "info"><li> Main Generation: ' + mainGen[0][0].toUpperCase() + mainGen[0].slice(1) + " " + mainGen[1].toUpperCase() + '</li>';
        p += '<li> Cities and Locations: ' + '</li>';
        
        for (var l = 0; l < cityNameList.length; l++) {
            p += '<li>' + cityNameList[l] + '</li>';
        }
        
        p += '</ul></div>';

        $('.data_box').html('');
        $('.data_box').append(p);
            
        });
       
        
    });
    
    
}