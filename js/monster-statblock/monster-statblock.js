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

function monsterClicked(monster) {
//    $("#ms-result").html("Got event for " + monster); // + event.text());
    $("#ms-dropdownbutton").html(monster + "  <span class='caret'></span>");
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
                $('#ms-monsters').append("<li><a href='javascript:monsterClicked(\"" + name + "\");'>" + name + "</a></li>");
                if (!buttonSet) {
                    $("#ms-dropdownbutton").html(name + "  <span class='caret'></span>");
                    buttonSet = true;
                }
            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
})
