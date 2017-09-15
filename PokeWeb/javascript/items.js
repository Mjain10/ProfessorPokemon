/*jslint browser: true*/
/*jslint devel: true */
/*global $, jQuery, alert, console*/

function itemSubmit() {
    "use strict";
    event.preventDefault();
    
    var param = document.getElementById('item').value.toLowerCase();
    
    var checkParam = param.split(' ');
    if (checkParam.length === 2) {
        param = checkParam[0] + '-' + checkParam[1];
    }
    
    var itemURL = 'http://pokeapi.co/api/v2/item/' + param;
    
    
    $.getJSON(itemURL, function(data) {
        
        var itemName = data.names[0].name;
        var effectEntry = data.effect_entries[0].effect;
        var cost = data.cost;
        var flavorText = data.flavor_text_entries[1].text;
        var attributes = '';
        
        for (var i = 0; i < data.attributes.length; i++) {
            attributes += data.attributes[i].name + ' ,';
        }
        
        var spriteURL = data.sprites.default;
        
        var p = ''; 

        p += '<p id = "base_info"><img src = " ' + spriteURL + ' "height = 150px width = 150px/></p>';
        p += '<p class = "title">' + itemName + '</p>';
        p += '<div class = "info_container"><ul id = "info"><li> Effect: ' + effectEntry + '</li>';
        p += '<li> Cost: ' + cost + ' poké'+ '</li>';
        p += '<li> Description: ' + flavorText + '</li>';
        
        if (data.attributes.length !== 0) {
        p += '<li> Item Attributes: ' + attributes[0].toUpperCase() + attributes.slice(1) + '</li>';
        }
        
        p += '</ul></div>';

        $('.data_box').html('');
        $('.data_box').append(p);
        
    });
    
    
}