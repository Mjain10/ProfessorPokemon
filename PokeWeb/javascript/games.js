/*jslint browser: true*/
/*jslint devel: true */
/*global $, jQuery, alert, console*/

function gameSubmit() {
    "use strict";
    event.preventDefault();
    
    var param = document.getElementById('game').value.toLowerCase();
    
    var checkParam = param.split(' ');
    if (checkParam.length === 2) {
        param = checkParam[0] + '-' + checkParam[1];
    }
    
    var gameURL = 'http://pokeapi.co/api/v2/version/' + param;
    
    
    $.getJSON(gameURL, function(data) {
        
        var name = "Pokémon " + data.names[4].name;
        var releaseGroup = data.version_group.name;
        var versionGroupURL = 'http://pokeapi.co/api/v2/version-group/' + releaseGroup;
        
        $.getJSON(versionGroupURL, function(data2) {
            
            var generation = data2.generation.name.split('-');
            var regions = data2.regions[0].name[0].toUpperCase() + data2.regions[0].name.slice(1);
            
            if (data2.regions.length === 2) {
                regions += ' ,' + data2.regions[1].name[0].toUpperCase() + data2.regions[1].name.slice(1);
                }
             
            var sprite;
            var splitReleaseGroup = releaseGroup.split('-');
            var formatReleaseGroup;
            
            if (releaseGroup.match(/-/g).length === 1){
                formatReleaseGroup = splitReleaseGroup[0][0].toUpperCase() + splitReleaseGroup[0].slice(1) + ' and ' + splitReleaseGroup[1][0].toUpperCase() + splitReleaseGroup[1].slice(1);
            } else if (releaseGroup.match(/-/g).length === 3){
                formatReleaseGroup = splitReleaseGroup[0][0].toUpperCase() + splitReleaseGroup[0].slice(1) + ' ' + splitReleaseGroup[1][0].toUpperCase() + splitReleaseGroup[1].slice(1) + ' and ' + splitReleaseGroup[2][0].toUpperCase() + splitReleaseGroup[2].slice(1) + ' ' + splitReleaseGroup[3][0].toUpperCase() + splitReleaseGroup[3].slice(1);
            } else {
                formatReleaseGroup = releaseGroup[0].toUpperCase() + releaseGroup.slice(1);
            }
            
            switch (param) {
                case 'red':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif";
                    break;
                case 'blue':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif";
                    break;
                case 'yellow':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"; 
                    break;
                case 'firered':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif"; 
                    break;
                case 'leafgreen':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif"; 
                    break;
                case 'crystal':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/suicune.gif";
                    break;
                case 'silver':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif";
                    break;
                case 'soulsilver':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif";
                    break;
                case 'gold':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/ho-oh.gif"; 
                    break;
                case 'heartgold':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/ho-oh.gif"; 
                    break;
                case 'ruby':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/groudon.gif"; 
                    break;
                case 'sapphire':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/kyogre.gif"; 
                    break;
                case 'omega-ruby':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/groudon.gif"; 
                    break;
                case 'alpha-sapphire':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/kyogre.gif"; 
                    break;
                case 'emerald':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/rayquaza.gif"; 
                    break;
                case 'diamond':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/dialga.gif"; 
                    break;
                case 'pearl':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/palkia.gif"; 
                    break;
                case 'platinum':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/giratina.gif"; 
                    break;
                case 'black':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/reshiram.gif"; 
                    break;
                case 'white':
                    sprite = "https://img.pokemondb.net/sprites/black-white/anim/normal/zekrom.gif"; 
                    break;
                case 'black-2':
                    sprite = "https://img.pokemondb.net/sprites/black-white-2/anim/normal/kyurem-black.gif";
                    break;
                case 'white-2':
                    sprite = "https://img.pokemondb.net/sprites/black-white-2/anim/normal/kyurem-white.gif";
                    break;
                case 'x':
                    sprite = "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/xerneas-active.png";
                    break;
                case 'y':
                    sprite = "https://img.pokemondb.net/sprites/x-y/normal/yveltal.png"; 
                    break;
                case 'sun':
                    sprite = "https://img.pokemondb.net/sprites/sun-moon/dex/normal/solgaleo.png";
                    break;
                case 'moon':
                    sprite = "https://img.pokemondb.net/sprites/sun-moon/dex/normal/lunala.png";
                    break;
                         }
                    
                        
            
            var p = '';
                
            p += '<p id = "base_info"><img src = " ' + sprite + ' "height = 200px width = 200px/></p>';
            p += '<p class = "title">' + name + '</p>';
            p += '<div class = "info_container"><ul id = "info">';
            p += '<li> Release Bundle: ' + formatReleaseGroup + '</li>';
            p += '<li> Generation: ' + generation[0][0].toUpperCase() + generation[0].slice(1) + " " + generation[1].toUpperCase() + '</li>';
            p += '<li> Regions featured: ' + regions + '</li>';
            p += '</ul></div>';

            $('.data_box').html('');
            $('.data_box').append(p);
            
        });
        
    });
    
    
    
}