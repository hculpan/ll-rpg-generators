/**
 * Created by harry on 2/3/14.
 */

roomContents = [];

currentRoomDisplay = -1;

specialRandomFeatures = new WeightedTable([
    { range: "01-03", name: "Alcove"},
    { range: "04-05", name: "Altar, large"},
    { range: "06-07", name: "Altar, small"},
    { range: "08-10", name: "Archway"},
    { range: "11-12", name: "Barrier, invisible"},
    { range: "13-14", name: "Basin, stone"},
    { range: "15-17", name: "Bust sculpture"},
    { range: "18-20", name: "Ceiling"},
    { range: "21-22", name: "Ceiling, domed"},
    { range: "23-25", name: "Chest, wooden"},
    { range: "26-28", name: "Container (jar, pot, etc.)"},
    { range: "29-30", name: "Door"},
    { range: "31", name: "Door, secret"},
    { range: "32-33", name: "Fireplace"},
    { range: "34-36", name: "Floor"},
    { range: "37-38", name: "Fountain"},
    { range: "39-40", name: "Fungus"},
    { range: "41-42", name: "Gate, iron"},
    { range: "43-45", name: "Idol"},
    { range: "46-48", name: "Mirror, large"},
    { range: "49-50", name: "Monster"},
    { range: "51-53", name: "Painting"},
    { range: "54-56", name: "Passage"},
    { range: "57-59", name: "Pedestal"},
    { range: "60-61", name: "Pillar/column"},
    { range: "62-65", name: "Pit"},
    { range: "66-67", name: "Platform, stone"},
    { range: "68-70", name: "Pool, artificial"},
    { range: "71-72", name: "Pool, natural"},
    { range: "73-74", name: "Portcullis"},
    { range: "75-76", name: "Room"},
    { range: "77-78", name: "Rug"},
    { range: "79-80", name: "Shelf, inset to wall"},
    { range: "81-82", name: "Sphere, glass"},
    { range: "83-84", name: "Stairway"},
    { range: "85-87", name: "Statue"},
    { range: "88-89", name: "Tapestry"},
    { range: "90-92", name: "Vault"},
    { range: "93-94", name: "Vegetation"},
    { range: "95-97", name: "Wall"},
    { range: "98-100", name: "Well"}
]);

specialRoomTableSet = new WeightedTableSet();

specialRoomTableSet.addTable("random-characteristics",
[
    { range: "01", name: "Ages, increasing" },
    { range: "02", name: "Ages, decreasing" },
    { range: "03-04", name: "Alters alignment" },
    { range: "05-06", name: "Animates an object" },
    { range: "07-08", name: "Attracts" },
    { range: "09-10", name: "Attacks" },
    { range: "11-12", name: "Bestows curse" },
    { range: "13-14", name: "Burns" },
    { range: "15-16", name: "Causes fear" },
    { range: "17-18", name: "Causes geas" },
    { range: "19-20", name: "Table:changes" },
    { range: "21-22", name: "Collapses" },
    { range: "23-24", name: "Condenses" },
    { range: "25-26", name: "Consumes" },
    { range: "27-28", name: "Table:decreases-ability" },
    { range: "29-30", name: "Decreases gravity" },
    { range: "31", name: "Disintegrates" },
    { range: "32-33", name: "Duplicates object" },
    { range: "34", name: "Duplicates person" },
    { range: "35-36", name: "Emits a gas" },
    { range: "37-38", name: "Emits a slime or ooze" },
    { range: "39", name: "Enlarges" },
    { range: "40-41", name: "Fake" },
    { range: "42", name: "Flesh to stone" },
    { range: "43-44", name: "Freezes" },
    { range: "45", name: "Grants a language" },
    { range: "46", name: "Grants opposite wish" },
    { range: "47", name: "Grants a wish" },
    { range: "48", name: "Heals" },
    { range: "49-50", name: "Heats" },
    { range: "51", name: "Illusionary" },
    { range: "52", name: "Table:increases-ability" },
    { range: "53", name: "Increases gravity" },
    { range: "54-55", name: "Invisible" },
    { range: "56-57", name: "Levitates" },
    { range: "58-59", name: "Moves" },
    { range: "60", name: "Nullifies magic" },
    { range: "61-62", name: "Pivots" },
    { range: "63", name: "Points" },
    { range: "64", name: "Poisons" },
    { range: "65", name: "Polymorphs" },
    { range: "66-67", name: "Table:produces-object" },
    { range: "68-69", name: "Reduces" },
    { range: "70-71", name: "Replaces" },
    { range: "72-73", name: "Repulses" },
    { range: "74-75", name: "Reveals lies" },
    { range: "76-77", name: "Reverses gravity" },
    { range: "78-79", name: "Sinks" },
    { range: "80-81", name: "Sliding" },
    { range: "82-83", name: "Slopes (up or down)" },
    { range: "84-85", name: "Table:speaks" },
    { range: "86-87", name: "Spins" },
    { range: "88-89", name: "Steals" },
    { range: "90-91", name: "Stone to flesh" },
    { range: "92-93", name: "Stretches" },
    { range: "94", name: "Suspends animation" },
    { range: "95-96", name: "Teleports" },
    { range: "97-98", name: "Twists" },
    { range: "99-100", name: "Withers a body part" }
]);

specialRoomTableSet.addTable('speaks',
[
    { range: "1", name: "Speaks with intelligence" },
    { range: "2", name: "Speaks a pre-programmed message" },
    { range: "3", name: "Speaks and tries to convince the party to take an action" },
    { range: "4", name: "Speaks and tries to lead the party into a trap" }
])

specialRoomTableSet.addTable('produces-object',
[
    { range: "1", name: "Produces gold coins" },
    { range: "2", name: "Produces fools gold" },
    { range: "3", name: "Produces magic item" },
    { range: "4", name: "Produces food" },
    { range: "5", name: "Produces gems" },
    { range: "6", name: "Produces water" },
    { range: "7", name: "Produces wine" },
    { range: "8", name: "Produces oil" }
])

specialRoomTableSet.addTable("changes",
[
    { range: "1", name: "Changes skin color" },
    { range: "2", name: "Changes eye volor" },
    { range: "3", name: "Changes hair color" },
    { range: "4", name: "Changes race" },
    { range: "5", name: "Changes sex" },
    { range: "6", name: "Changes height" }
])

specialRoomTableSet.addTable('decreases-ability',
[
    { range: "1", name: "Decreases STR" },
    { range: "2", name: "Decreases DEX" },
    { range: "3", name: "Decreases CON" },
    { range: "4", name: "Decreases INT" },
    { range: "5", name: "Decreases WIS" },
    { range: "6", name: "Decreases CHA" }
])

specialRoomTableSet.addTable('increases-ability',
    [
        { range: "1", name: "Increases STR" },
        { range: "2", name: "Increases DEX" },
        { range: "3", name: "Increases CON" },
        { range: "4", name: "Increases INT" },
        { range: "5", name: "Increases WIS" },
        { range: "6", name: "Increases CHA" }
    ])

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

function replaceResult(output) {
    currentRoomDisplay = roomContents.length - 1;
    roomContents[currentRoomDisplay] = output;
    $("#sd-next-btn").prop('disabled', true);
    if (roomContents.length > 1) {
        $("#sd-prev-btn").prop('disabled', false);
    } else {
        $("#sd-prev-btn").prop('disabled', true);
    }
}

function stockRoom() {
    disableButtons();

    var roomContents = rollDice(5) + 1;
    var treasureRoll = rollDice(6);

    var output = "";
    if (/*roomContents == 1 ) ||*/ roomContents == 2) {
        output = "<p>Empty [roll=" + roomContents.toString() + "]</p>";
        if (treasureRoll == 1) {
            output += "<p>Treasure: " + generateUnprotectedTreasure(getDungeonLevel())['output'] + "</p>";
        }
    } else if (roomContents == 3) {
        output = "<p>Trap: " + generateTrap() +  " [roll=" + roomContents.toString() + "]</p>";
        if (treasureRoll <= 2) {
            output += "<p>Treasure: " + generateUnprotectedTreasure(getDungeonLevel())['output'] +
                " [" + roomContents.toString() + "]</p>";
        }
    } else if (roomContents == 4 || roomContents == 5) {
        buildMonsterDungeonEncounter(roomContents, treasureRoll, storeResult);
    } else {
        output = "<p>Special [roll=" + roomContents.toString() + "]</p>";
        output += "<p>" + buildSpecialRoomFeature() + "</p>";
        output += "<p>" + buildSpecialRoomCharacteristic() + "</p>";
        disableButtons('re-roll-special');
    }

    if (output != undefined && output != "") {
        storeResult(output);
    }
    $("#sd-main-result").html(output);
}

function disableButtons(excludes) {
    var params;
    if (excludes != undefined && typeof excludes === 'string') {
        params = [excludes];
    } else if (excludes != undefined) {
        params = excludes;
    } else {
        params = [];
    }

    $("#re-roll-monster").prop("disabled", !(params.indexOf('re-roll-monster') >= 0));
    $("#re-roll-treasure").prop("disabled", !(params.indexOf('re-roll-treasure') >= 0));
    $("#re-roll-special").prop("disabled", !(params.indexOf('re-roll-special') >= 0));
}

function buildMonsterDungeonEncounter(roomContentsRoll, treasureRoll, storeResult) {
    getDungeonEncounterByLevel(getDungeonLevel(), function(monster) {
        var num = diceRoller.roll(monster['numEncountered']).total;

        var Monster = Parse.Object.extend("monsters");
        var query = new Parse.Query(Monster);
        console.log('monster: ' + monster['name']);
        query.equalTo("name", monster['name']);
        query.find({
            success: function(results) {
                if (results.length == 0) {
                    var output = "<p>Monster: " + num + " " + monster['name'] + " [roll=" + roomContentsRoll.toString() + "]</p>";
                    $("#sd-main-result").html(output);
/*                    disableButtons(['re-roll-monster']); */
                } else {
                    var monsterObj = results[0];
                    var output = "<p>Monster: " + num + " " + monsterObj.get('name') + " [roll=" + roomContentsRoll.toString() + "]</p>";

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
/*                    if (treasure == undefined) {
                        disableButtons(['re-roll-monster']);
                    } else {
                        disableButtons(['re-roll-monster', 're-roll-treasure']);
                    }*/
                }
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    });
}

function buildSpecialRoomFeature() {
    return "Room feature: " + specialRandomFeatures.getText();
}

function buildSpecialRoomCharacteristic() {
    return "Room characteristic: " + specialRoomTableSet.getText();
}

function reRollSpecial() {
    var output = "<p>Special</p>";
    output += "<p>" + buildSpecialRoomFeature() + "</p>";
    output += "<p>" + buildSpecialRoomCharacteristic() + "</p>";
    disableButtons('re-roll-special');

    if (output != undefined && output != "") {
        replaceResult(output);
    }
    $("#sd-main-result").html(output);
}