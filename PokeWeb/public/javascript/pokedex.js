/*jslint browser: true*/
/*jslint devel: true */
/*global $, jQuery, alert, console*/

function pokeSubmit() {
    "use strict";
    event.preventDefault();
    
    var param = document.getElementById('dex').value.toLowerCase();
    var dexURL = 'http://pokeapi.salestock.net/api/v2/pokemon/' + param;
    
    $.getJSON(dexURL, function(data) {
        
        var id = data.id;
        var name = data.name[0].toUpperCase() + data.name.slice(1);
        var type1 = data.types[0].type.name;
        var type2;
        
        if (data.types.length === 2) {
            type2 = data.types[1].type.name;
        } else {
            type2 = null;
        }
        
        var sprite = data.sprites.front_default;
        var speed = data.stats[0].base_stat;
        var defense = data.stats[3].base_stat;
        var attack = data.stats[4].base_stat;
        var specialAttack = data.stats[2].base_stat;
        var specialDefense = data.stats[1].base_stat;
        var hp = data.stats[5].base_stat;
        
        
        var abilityURLS = [];
        
        for (var i = 0; i < data.abilities.length; i++) {
            abilityURLS.push(data.abilities[i].ability.url);
        }
        
        
        var promises = [];

        for (var i = 0; i < abilityURLS.length; i++) {
            promises.push($.getJSON(abilityURLS[i]));
        }

        $.when.apply($, promises).then(function(){
            var effects = [];
            var abilityNames = [];

            for(var j = 0; j < arguments.length; j++){
                // arguments[i][0] is needed because each argument
                // is an array of 3 elements.
                // The data, the status, and the jqXHR object
                effects.push(arguments[j][0].effect_entries[0].effect);
                abilityNames.push(arguments[j][0].names[0].name);
            }

            var p = ''; 

            p += '<p id = "base_info"><img src = " ' + sprite + ' "height = 200px width = 200px/></p>';
            p += '<p class = "title">#' + id + ' ' + name + '</p>';

            if (type2 !== null) {
                p += '<div class = "info_container"><ul id = "info"><li> Type(s): ' + type1 + ' and ' + type2 + '</li>';
            } else {
                    p += '<div class = "info_container"><ul id = "info"><li> Type(s): ' + type1 + '</li>';
            }

            p += '<li> Base Speed: ' + speed + '</li>';
            p += '<li> Base Defense: ' + defense + '</li>';
            p += '<li> Base Attack: ' + attack + '</li>';
            p += '<li> Base Special Defense: ' + specialDefense + '</li>';
            p += '<li> Base Special Attack: ' + specialAttack + '</li>';

            for (var l = 0; l < abilityNames.length; l++) {
                p += '<li> Ability: ' + abilityNames[l] + '</li>';
                p += '<li> Ability Effect: ' + effects[l] + '</li>';
            }

            p += '</ul></div>';

            $('.data_box').html('');
            $('.data_box').append(p);

            }); 
    });   
}
