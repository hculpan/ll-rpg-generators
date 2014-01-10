/**
 * Created by harry on 1/7/14.
 */

randomEncounterTables = new Object();

menTable = new Table([
    "Men, Berserker",
    "Men, Brigand",
    "Men, Brigand",
    "Special:Evil cleric",
    "Special:Cleric",
    "Special:Fighter",
    "Special:Mage",
    "Special:Merchant",
    "Special:NPC Party",
    "Special:NPC Party",
    "Special:Thief",
    "Special:Thief"
]);

humanoidTable = new Table([
    "Bugbear",
    "Cyclops",
    "Dryad",
    "Elf",
    "Giant, Hill",
    "Gnoll",
    "Goblin",
    "Hobgoblin",
    "Ogre",
    "Orc",
    "Pixie",
    "Troll"
]);

westholmeRandomEncounterTable = new Table([
    "Men",
    "Humanoid"
]);

$(document).ready(function() {
    randomEncounterTables["Men"] = menTable;
    randomEncounterTables["Humanoid"] = humanoidTable;
});

function checkForEncounter() {
    var output = "No encounter";
    if (rollDice(6) == 1) {
        var rtable = westholmeRandomEncounterTable.getValue();
        var table = randomEncounterTables[rtable];
        var monster = table.getValue();
        if (monster.substr(0, 8) == "Special:") {
            output = "You encountered " + monster.substr(8);
        } else {
            var Monster = Parse.Object.extend("monsters");
            var query = new Parse.Query(Monster);
            query.equalTo("name", monster);
            query.find({
                success: function(results) {
                    $("#re-result").html(buildMonsterStatBlock(results[0]));
                },
                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }
    }
    $('#re-result').html(output);
}