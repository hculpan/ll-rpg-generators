/**
 * Created by harry on 2/3/14.
 */

roomContents = [];

currentRoomDisplay = -1;

$(document).ready(function() {
    $("#sd-prev-btn").prop('disabled', true);
    $("#sd-next-btn").prop('disabled', true);
});

function getDungeonLevel() {
    return parseInt($('#dungeon-level').val());
}

function rollEncounterRolls() {
    return $('#sd-encounter-rolls').prop('checked');
}

function displayPrevious() {
    console.log("displayPrevious: currentRoomDisplay=" + currentRoomDisplay.toString());
    $("#sd-next-btn").prop('disabled', false);
    if (currentRoomDisplay > 0) {
        currentRoomDisplay--;
        $("#sd-main-result").html(roomContents[currentRoomDisplay]);
        if (currentRoomDisplay == 0) {
            $("#sd-prev-btn").prop('disabled', true);
        }
    } else {
        $("#sd-next-btn").prop('disabled', true);
    }
}

function displayNext() {
    $("#sd-prev-btn").prop('disabled', false);
    if (currentRoomDisplay < roomContents.length - 1) {
        currentRoomDisplay++;
        $("#sd-main-result").html(roomContents[currentRoomDisplay]);
        if (currentRoomDisplay == roomContents.length - 1) {
            $("#sd-next-btn").prop('disabled', true);
        }
    } else {
        $("#sd-next-btn").prop('disabled', true);
    }
}

function storeResult(output) {
    roomContents.push(output);
    currentRoomDisplay = roomContents.length - 1;
    $("#sd-next-btn").prop('disabled', true);
    if (roomContents.length > 1) {
        $("#sd-prev-btn").prop('disabled', false);
    } else {
        $("#sd-prev-btn").prop('disabled', true);
    }
}

function stockRoom() {
    var roomContents = rollDice(5) + 1;
    var treasureRoll = rollDice(6);

    var output = "";
    if (/*roomContents == 1 ) ||*/ roomContents == 2) {
        output = "<p>Empty</p>";
        if (treasureRoll == 1) {
            output += "<p>Treasure: " + generateUnprotectedTreasure(getDungeonLevel())['output'] + "</p>"
        }
    } else if (roomContents == 3) {
        output = "<p>Trap: " + generateTrap() + "</p>";
        if (treasureRoll <= 2) {
            output += "<p>Treasure: " + generateUnprotectedTreasure(getDungeonLevel())['output'] + "</p>"
        }
    } else if (roomContents == 4 || roomContents == 5) {
        buildMonsterDungeonEncounter(treasureRoll, storeResult);
    } else {
        output = "<p>Special</p>";
    }

    if (output != undefined && output != "") {
        storeResult(output);
    }
    $("#sd-main-result").html(output);
}

function buildMonsterDungeonEncounter(treasureRoll, storeResult) {
    getDungeonEncounterByLevel(getDungeonLevel(), function(monster) {
        var num = diceRoller.roll(monster['numEncountered']).total;

        var Monster = Parse.Object.extend("monsters");
        var query = new Parse.Query(Monster);
        console.log('monster: ' + monster['name']);
        query.equalTo("name", monster['name']);
        query.find({
            success: function(results) {
                if (results.length == 0) {
                    var output = "<p>Monster: " + num + " " + monster['name'] + "</p>";
                    $("#sd-main-result").html(output);
                } else {
                    var monsterObj = results[0];
                    var output = "<p>Monster: " + num + " " + monsterObj.get('name') + "</p>";

                    if (rollEncounterRolls()) {
                        output += "<p>" + rollSurprise() + " " + rollReaction() + "</p>";
                    }

                    output += "<p>" + buildMonsterStatBlock(monsterObj, true) + "</p>";
                    var treasure = undefined
                    if (treasureRoll <= 3) {
                        if (monsterObj.get('hoard_class') != undefined && monsterObj.get('hoard_class') != "None") {
                            console.log('generating treasure hoard');
                            treasure = generateTreasureText(monsterObj.get('hoard_class'))
                        } else {
                            console.log('generating unprotected treasure');
                            treasure = generateUnprotectedTreasure(getDungeonLevel())
                        }
                        output += "<p>Treasure: " + treasure['output'] + "</p>";
                    }

                    output += "<p>" + rollHitPoints(num, monsterObj.get('hd')) + "</p>";

                    var mxp = monsterObj.get('xp') * num
                    var txp = Math.floor(treasure == undefined ? 0 : treasure['gpValue'])
                    output += "<p>" + "Encounter XP: " + (mxp + txp)
                    if (treasure != undefined) {
                        output += " [monster xp=" + mxp + ", treasure xp=" + txp +  "]"
                    }
                    output += "</p>"

                    storeResult(output);
                    $("#sd-main-result").html(output);
                }
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    });
}
