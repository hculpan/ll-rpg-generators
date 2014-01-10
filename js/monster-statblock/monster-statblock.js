/**
 * Created by harry on 1/7/14.
 */

var monsterList = new Object();

function buildMonsterStatBlock(monsterObject) {
    var output = "";

    output += monsterObject.get('name');
    output += " (" + monsterObject.get('enc_dungeon') + "/" + monsterObject.get('enc_lair') + ")<br>";
    output += "AC " + monsterObject.get('ac_asc') + " [" + monsterObject.get('ac_desc') + "]";
    output += "; " + monsterObject.get('move');
    output += "; HD " + monsterObject.get('hd');
    output += "; #AT " + monsterObject.get('attacks');
    output += "; D " + monsterObject.get('damage');
    output += "; Save " + monsterObject.get('save');
    output += "; ML " + monsterObject.get('morale');

    return output;
}

function monsterSelected(monster) {
    var Monster = Parse.Object.extend("monsters");
    var query = new Parse.Query(Monster);
    query.equalTo("name", monster);
    query.find({
        success: function(results) {
            $("#ms-result").html(buildMonsterStatBlock(results[0]));
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}

monstersArray = new Array();

$(document).ready(function() {
    var Monster = Parse.Object.extend("monsters");
    var query = new Parse.Query(Monster);
    query.select("name");
    query.limit(1000);
    query.ascending("name");
    query.find({
        success: function(results) {
            var buttonSet = false;
            for (var i = 0; i < results.length; i++) {
                var name = results[i].get('name');
                monstersArray.push(name);
                if (!buttonSet) {
                    $("#ms-dropdownbutton").html(name + "  <span class='caret'></span>");
                    buttonSet = true;
                }
            }
            $('.ms-searchablelist .typeahead').typeahead({
                name: 'monsters',
                local: monstersArray,
                limit: 20
            });
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });

    $('.ms-searchablelist .typeahead').on('typeahead:selected', function (object, datum) {
        monsterSelected(datum.value.toString());
    });
})
