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
            output += "<p>Treasure: " + generateUnprotectedTreasure(getDungeonLevel()) + "</p>"
        }
    } else if (roomContents == 3) {
        output = "<p>Trap: " + generateTrap() + "</p>";
        if (treasureRoll <= 2) {
            output += "<p>Treasure: " + generateUnprotectedTreasure(getDungeonLevel()) + "</p>"
        }
    } else if (roomContents == 4 || roomContents == 5) {
        buildMonsterDungeonEncounter(treasureRoll);
    } else {
        output = "<p>Special</p>";
    }

    $("#sd-main-result").html(output);
}

function buildMonsterDungeonEncounter(treasureRoll) {
    var monster = getDungeonEncounter(getDungeonLevel());
    var num = diceRoller.roll(monster['numEncountered']).total;

    var Monster = Parse.Object.extend("monsters");
    var query = new Parse.Query(Monster);
    console.log('monster: ' + monster['name']);
    query.equalTo("name", monster['name']);
    query.find({
        success: function(results) {
            if (results.length == 0) {
                $("#sd-main-result").html("unable to lookup '" + monster['name'] + "'");
            } else {
                var monsterObj = results[0];
                console.log(monsterObj);
                var output = "<p>Monster: " + num + " " + monsterObj.get('name') + "</p>";
                output += "<p>" + buildMonsterStatBlock(monsterObj, true) + "</p>";
                if (treasureRoll <= 3) {
                    if (monsterObj.get('hoard_class') != undefined && monsterObj.get('hoard_class') != "None") {
                        console.log('generating treasure for hoard class ' + monsterObj.get('hoard_class'))
                        output += "<p>Treasure: " + generateTreasureText(monsterObj.get('hoard_class')) + "</p>";
                    } else {
                        console.log('generating unguarded treasure');
                        output += "<p>Treasure: " + generateUnprotectedTreasure(getDungeonLevel()) + "</p>";
                    }
                }

                output += rollHitPoints(num, monsterObj.get('hd'))

                $("#sd-main-result").html(output);
            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}