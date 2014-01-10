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

flyerTable = new Table([
    "Bat, Giant",
    "Cockatrice",
    "Griffon",
    "Hawk, Giant",
    "Hippogriff",
    "Owl, Giant",
    "Pegasus",
    "Pixie",
    "Roc, Small",
    "Sprite",
    "Stirge",
    "Bat"
]);

insectTable = new Table([
    "Ant, Giant",
    "Bee, Giant Killer",
    "Beetle, Giant Fire",
    "Beetle, Giant Carnivorous",
    "Beetle, Giant Rhinocerous",
    "Carcass Scavanger",
    "Centipede, Giant",
    "Fly, Giant Carnivorous",
    "Rhagodessa, Giant",
    "Scorpion, Giant",
    "Spider, Giant Black Widow",
    "Spider, Giant Crab Spider"
]);

unusualTable = new Table([
    "Ape, Albino",
    "Basilisk",
    "Blink Dog",
    "Centaur",
    "Gorgon",
    "Hell Hound",
    "Lycanthrope, Werebear",
    "Lycanthrope, Wereboar",
    "Medusa",
    "Phase Tiger",
    "Rust Monster",
    "Skittering Maw",
    "Treant"
]);

animalTable = new Table([
    "Herd Animals",
    "Bat",
    "Bear, Grizzly",
    "Boar",
    "Cat, Panther",
    "Hawk",
    "Owl, Giant",
    "Snake, Pit Viper",
    "Spider, Giant Black Widow",
    "Toad, Giant",
    "Wolf",
    "Wolf, Dire"
]);

undeadTable = new Table([
    "Ghoul (Undead)",
    "Ghoul (Undead)",
    "Mummy (Undead)",
    "Ghast (Undead)",
    "Skeleton (Undead)",
    "Skeleton (Undead)",
    "Wight (Undead)",
    "Wraith (Undead)",
    "Zombie (Undead)",
    "Zombie (Undead)"
]);

westholmeRandomEncounterTable = new Table([
    "Men",
    "Humanoid",
    "Flyer",
    "Insect",
    "Unusual",
    "Animal",
    "Animal",
    "Undead"
]);

$(document).ready(function() {
    randomEncounterTables["Men"] = menTable;
    randomEncounterTables["Humanoid"] = humanoidTable;
    randomEncounterTables["Flyer"] = flyerTable;
    randomEncounterTables["Insect"] = insectTable;
    randomEncounterTables["Unusual"] = unusualTable;
    randomEncounterTables["Animal"] = animalTable;
    randomEncounterTables["Undead"] = undeadTable;
});

function checkForEncounter() {
    if (rollDice(6) == 1) {
        var rtable = westholmeRandomEncounterTable.getValue();
        var table = randomEncounterTables[rtable];
        var monster = table.getValue();
        if (monster.substr(0, 8) == "Special:") {
            $('#re-result').html("You encountered " + monster.substr(8));
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
    } else {
        $("#re-result").html("No encounter");
    }
}