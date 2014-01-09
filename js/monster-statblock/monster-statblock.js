/**
 * Created by harry on 1/7/14.
 */

var monsterList = new Object();

function monsterClicked(monster) {
    $("#ms-result").html("Got event for " + monster); // + event.text());
    $("#ms-dropdownbutton").html(monster + "  <span class='caret'></span>");
}

$(document).ready(function() {
    jQuery.get('ll_monsters.txt', function(data) {
        var lines = data.split('\n');
        var output = "";
        var buttonSet = false;
        for (var i = 0; i < lines.length; i++) {
            var fields = lines[i].split("|");
            if (fields[0].substr(0, 1) != "#") {
                $('#ms-monsters').append("<li><a href='javascript:monsterClicked(\"" + fields[0] + "\");'>" + fields[0] + "</a></li>");
                if (!buttonSet) {
                    $("#ms-dropdownbutton").html(fields[0] + "  <span class='caret'></span>");
                    buttonSet = true;
                }
            }
        }
    });
})
