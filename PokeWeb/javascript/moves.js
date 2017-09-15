/*jslint browser: true*/
/*jslint devel: true */
/*global $, jQuery, alert, console*/

function moveSubmit() {
    "use strict";
    event.preventDefault();
    
    var param = document.getElementById('move').value.toLowerCase();
    
    var checkParam = param.split(' ');
    if (checkParam.length === 2) {
        param = checkParam[0] + '-' + checkParam[1];
    }
    
    var moveURL = 'http://pokeapi.co/api/v2/move/' + param;
    
    $.getJSON(moveURL, function(data) {
        
        var move = data.name;
        var pp = data.pp;
        var accuracy = data.accuracy;
        var power = data.power;
        var damageClass = data.damage_class.name;
        var effectEntry = data.effect_entries[0].short_effect;
        var flavorText = data.flavor_text_entries[1].flavor_text;
        var flinch = data.meta.flinch_chance;
        var critHit = data.meta.crit_rate;
        var type = data.type.name;
            
        var p = ''
                
        p += '<p class = "title">' + move[0].toUpperCase() + move.slice(1) + '</p>';
        p += '<div class = "info_container"><ul id = "info"><li> Move Type: ' + type[0].toUpperCase() + type.slice(1) + '</li>';
        p += '<li> PP: ' + pp + '</li>';
        p += '<li> Accuracy: ' + accuracy + '</li>';
        p += '<li> Power: ' + power + '</li>';
        p += '<li> Type of Damage: ' + damageClass + '</li>';
        p += '<li> Effect: ' + effectEntry[0].toUpperCase() + effectEntry.slice(1) + '</li>';
        p += '<li> Description of Move: ' + flavorText[0].toUpperCase() + flavorText.slice(1) + '</li>';
        p += '<li> Chance of Flinching: ' + flinch + '</li>';
        p += '<li> Chance of Critical Hit: ' + critHit + '</li>';
        p += '</ul></div>';

        $('.data_box').html('');
        $('.data_box').append(p);
        
        
    });
    
    
  
    
    
}