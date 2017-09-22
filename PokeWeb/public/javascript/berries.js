/*jslint browser: true*/
/*jslint devel: true */
/*global $, jQuery, alert, console*/

function berrySubmit() {
    "use strict";
    event.preventDefault();
    var param = document.getElementById('berry').value.toLowerCase();
    var berryURL = 'http://pokeapi.co/api/v2/berry/' + param;
    var spriteURL = 'http://pokeapi.co/api/v2/item/' + param + '-berry';
    
    $.getJSON(berryURL, function (data) {
        
        var berryName = data.name;
        var growthTime = data.growth_time;
        var maxHarvest = data.max_harvest;
        var smoothness = data.smoothness;
        var firmness = data.firmness.name;
        var flavor = data.flavors[0].flavor.name;
        
    
        $.getJSON(spriteURL, function (data2) {

            var sprite = data2.sprites.default;
            var description = data2.effect_entries[0].short_effect;

            var p = ''; 

            p += '<p id = "base_info"><img src = " ' + sprite + ' "height = 200px width = 200px/>';
            p += '<p class = "title">' + berryName[0].toUpperCase() + berryName.slice(1) + '</p>';
            p += '<ul id = "info"><li> Growth Time: ' + growthTime + ' hours for one stage' + '</li>';
            p += '<li> Maximum Harvest: ' + maxHarvest + ' berries'+ '</li>';
            p += '<li> Smoothness: ' + smoothness + '</li>';
            p += '<li> Firmness: ' + firmness + '</li>';
            p += '<li> Flavor: ' + flavor[0].toUpperCase() + flavor.slice(1) + '</li>';
            p += '<li> Description: ' + description + '</li>';
            p += '</ul></p>';

            $('.data_box').html('');
            $('.data_box').append(p);
    
        
        });
        
    });
    
}