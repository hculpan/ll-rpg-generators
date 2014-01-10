/**
 * Created by harry on 1/7/14.
 */

wildernessEncounterTables = new Object();

/*menTable = new Table([
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
]);*/

$(document).ready(function() {
    wildernessEncounterTables["Desert"] = new Table([
        "Beetle, Giant Fire",
        "Beetle, Giant Spitting",
        "Blink Dog",
        "Camel",
        "Cat, Lion",
        "Dragon, Blue",
        "Dragon, Red",
        "Goblin",
        "Hawk, Giant",
        "Hobgoblin",
        "Lizard, Giant Gecko",
        "Lizard, Giant Tuatara",
        "Men, Nomad",
        "Mummy (Undead)",
        "NPC Party",
        "Ogre",
        "Scorpion, Giant",
        "Snake, Pit Viper",
        "Snake, Giant Rattler",
        "Spider, Giant Tarantula"
    ]);

    wildernessEncounterTables["Forest/Wooded"] = new Table([
        "Bee, Giant Killer",
        "Boar",
        "Bugbear",
        "Cat, Panther",
        "Cockatrice",
        "Dryad",
        "Dragon, Green",
        "Elf",
        "Ghoul (Undead)",
        "Hobgoblin",
        "Lycanthrope, Werewolf",
        "Men, Brigand",
        "Orc",
        "Roc, Small",
        "Spider, Giant Crab",
        "Troll",
        "Unicorn",
        "Wight (Undead)",
        "Wolf",
        "Wolf, Dire"
    ]);

    wildernessEncounterTables["Grassland"] = new Table([
        "Ant, Giant",
        "Baboon, Higher",
        "Boar",
        "Dragon, Green",
        "Fly, Giant Carnivorous",
        "Giant, Hill",
        "Halfling",
        "Hippogriff",
        "Horse, Riding (wild)",
        "Men, Merchant",
        "Men, Nomad",
        "Ogre",
        "Orc",
        "Scorpion, Giant",
        "Spider, Giant Black Widow",
        "Stirge",
        "Troll",
        "Throghrin",
        "Weasel, Giant",
        "Wyvern"
    ]);

    wildernessEncounterTables["Inhabited Lands"] = new Table([
        "Dragon, Gold",
        "Dwarf",
        "Elf",
        "Gargoyle",
        "Giant, Hill",
        "Goblin",
        "Halfling",
        "Lycanthrope, Weretiger",
        "Men, Brigand",
        "Men, Merchant",
        "Special:NPC Party",
        "Ogre",
        "Orc",
        "Rat, Giant",
        "Rhagodessa",
        "Skeleton",
        "Werewolf",
        "Vampire",
        "Wight",
        "Zombie"
    ]);

    wildernessEncounterTables["Jungle"] = new Table([
        "Ant, Giant",
        "Bugbear",
        "Cat, Panther",
        "Dragon, Green",
        "Elephant",
        "Fly, Giant Carnivorous",
        "Giant, Fire",
        "Gnoll",
        "Gray Worm",
        "Lizardfolk",
        "Lycanthrope, Wereboar",
        "Medusa",
        "Men, Brigand",
        "Men, Merchant",
        "Neanderthal",
        "Phase Tiger",
        "Rat, Giant",
        "Scorpion, Giant",
        "Snake, Giant Python",
        "Troll"
    ]);

    $('.selectpicker').selectpicker();

    $("#re-button").removeAttr("disabled");
});

function isWilderness() {
    return $('#re-wilderness').prop('checked');
}

function isForcedEncounter() {
    return $('#re-force').prop('checked');
}

function generateEncounter() {
    if (isWilderness()) {
        var terrain = $("#re-terrain").val();
        var monster = wildernessEncounterTables[terrain].getValue();
        if (monster.substr(0, 8) == "Special:") {
            $('#re-result').html("You encountered " + monster.substr(8));
        } else {
            var Monster = Parse.Object.extend("monsters");
            var query = new Parse.Query(Monster);
            query.equalTo("name", monster);
            query.find({
                success: function(results) {
                    var mObject = results[0];
                    if (mObject == undefined) {
                        $('#re-result').html("Rolled " + monster + " but cannot retrieve stats");
                    } else {
                        var numEncountered = mObject.get('enc_lair');
                        console.log(mObject.get('name') + ": " + numEncountered);
                        if (numEncountered == "0") {
                            console.log('invalid encounter, try again...');
                            generateEncounter();
                        } else {
                            $("#re-result").html(buildMonsterStatBlock(mObject));
                        }
                    }
                },
                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }
    } else {

    }
}

function checkForEncounter() {
    $("#re-result").html("");
    var roll = rollDice(6);
    if (isForcedEncounter() || roll == 1) {
        generateEncounter();
    } else {
        $("#re-result").html("No encounter (rolled " + roll + ")");
    }
}