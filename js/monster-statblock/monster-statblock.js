/**
 * Created by harry on 1/7/14.
 */

var monsterList = new Object();

$(document).ready(function() {
    jQuery.get('ll_monsters.txt', function(data) {
        var lines = data.split('\n');
        var output = "";
        var buttonSet = false;
        for (var i = 0; i < lines.length; i++) {
            var fields = lines[i].split("|");
            if (fields[0].substr(0, 1) != "#") {
                $('#ms-monsters').append("<li><a href='#'>" + fields[0] + "</a></li>");
                if (!buttonSet) {
                    $("#ms-dropdownbutton").html(fields[0] + "  <span class='caret'></span>");
                    buttonSet = true;
                }
            }
        }
    });

    $(".dropdown-menu li a").click(function(event){
        $("#ms-result").html("Got " + event.text());
    });
})
