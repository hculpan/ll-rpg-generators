/**
 * Created by harry on 2/3/14.
 */

function getDungeonLevel() {
    return parseInt($('#dungeon-level').val());
}

function stockRoom() {
    var roomContents = rollDice(6);
    var treasureRoll = rollDice(6);

    var output = "";
    if (roomContents == 1 || roomContents == 2) {
        output = "<p>Empty</p>";
        if (treasureRoll == 1) {
            output += "<p>There is treasure here</p>"
        }
    } else if (roomContents == 3) {
        output = "<p>Trap: " + generateTrap() + "</p>";
        if (treasureRoll <= 2) {
            output += "<p>There is treasure here</p>"
        }
    } else if (roomContents == 4 || roomContents == 5) {
        output = "<p>Monster</p>";
        if (treasureRoll <= 3) {
            output += "<p>There is treasure here</p>"
        }
    } else {
        output = "<p>Special</p>";
    }

    $("#sd-main-result").html(output);
}