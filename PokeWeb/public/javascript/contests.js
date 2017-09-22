/*jslint browser: true*/
/*jslint devel: true */
/*global $, jQuery, alert, console*/

function contestSubmit() {
    "use strict";
    event.preventDefault();
    
    var param = document.getElementById('contest').value.toLowerCase();
    var contestURL = 'http://pokeapi.co/api/v2/contest-type/' + param;
    
    $.getJSON(contestURL, function(data) {
        
        var contestName = data.name;
        var berryFlavor = data.berry_flavor.name;
        var color = data.names[0].color;
        var id = data.id;
        var contestEffectURL = 'http://pokeapi.co/api/v2/contest-effect/' + id;
        
        
        $.getJSON(contestEffectURL, function(data2) {
            
            var appeal = data2.appeal;
            var jam = data2.jam;
            var effectEntry = data2.effect_entries[0].effect;
            var superContestEffectURL = 'http://pokeapi.co/api/v2/super-contest-effect/' + id;
            
            $.getJSON(superContestEffectURL, function(data3) {
                
                var superAppeal = data3.appeal;
                var flavorText = data3.flavor_text_entries[0].flavor_text;
                var superMovesArray = [];
                
                for (var i = 0; i < data3.moves.length; i++) {
                    
                    superMovesArray.push(data3.moves[i].name);
                }
                
                var listOfSuperMoves = ''
                
                for (var j = 0; j < superMovesArray.length; j++) {
                    
                    if (j === superMovesArray.length/2) {
                        listOfSuperMoves += superMovesArray[j] + ', ' + '\n';
                    } else {
                    listOfSuperMoves += superMovesArray[j] + ', ';
                    }
                }
                
                switch (color){
                    case 'Rouge':
                        color = 'Red';
                        break;
                    case 'Bleu':
                        color = 'Blue';
                        break;
                    case 'Vert':
                        color = 'Green';
                        break;
                    case 'Jaune':
                        color = 'Yellow';
                        break;
                    case 'Rose':
                        color = 'Pink';
                        break;
                }
                
                var p = ''
                
                p += '<p class = "title">' + contestName[0].toUpperCase() + contestName.slice(1) + '</p>';
                p += '<div class = "info_container"><ul id = "info"><li> Color: ' + color + '</li>';
                p += '<li> Berry flavor best for this contest: ' + berryFlavor[0].toUpperCase() + berryFlavor.slice(1) + ' berries' + '</li>';
                p += '<li> Appeal: ' + appeal + ' hearts earned by user'+ '</li>';
                p += '<li> Jam: ' + jam + ' hearts lost by opponents' + '</li>';
                p += '<li> Effect of Moves: ' + effectEntry + '</li>';
                p += '<li> Super Contest Appeal: ' + superAppeal + ' hearts earned by user' + '</li>';
                p += '<li> Effect of Moves in Super Contest: ' + flavorText[0].toUpperCase() + flavorText.slice(1) + '</li>';
                p += '<li> List of Moves: ' + listOfSuperMoves + '</li>';
                p += '</ul></div>';

                $('.data_box').html('');
                $('.data_box').append(p);
                
            });
            
            
        });  
        
          
    });
    

    
}