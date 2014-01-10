/**
 * Created by harry on 1/7/14.
 */

wildernessEncounterTables = new Object();
dungeonEncounterTables = new Object();

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
        "Special:NPC Party",
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

    wildernessEncounterTables["Mountains/Hills"] = new Table([
        "Ape, Albino",
        "Beetle, Giant Spitting",
        "Cat, Sabre-Tooth Tiger",
        "Chimera",
        "Dragon, Red",
        "Dragon, White",
        "Dwarf",
        "Giant, Hill",
        "Giant, Stone",
        "Griffon",
        "Halfling",
        "Lycanthrope, Werewolf",
        "Men, Brigand",
        "Men, Merchant",
        "Morlock",
        "Neanderthal",
        "Ogre",
        "Orc",
        "Phase Tiger",
        "Roc, Giant"
    ]);

    wildernessEncounterTables["Rivers/Lakes"] = new Table([
        "Bee, Giant Killer",
        "Boar",
        "Cat, Panther",
        "Crab, Giant",
        "Crocodile",
        "Dragon, Black",
        "Dragon, Green",
        "Elf",
        "Fish, Giant Piranha",
        "Fly, Giant Carnivorous",
        "Hydra, Aquatic",
        "Leech, Giant",
        "Lizardfolk",
        "Merfolk",
        "Special:NPC Party",
        "Ogre",
        "Rat, Giant",
        "Stirge",
        "Toad, Giant",
        "Troll"
    ]);

    wildernessEncounterTables["Sea"] = new Table([
        "Crab, Giant",
        "Crocodile, Giant",
        "Dragon, Green",
        "Dragon, Sea",
        "Dragon Turtle",
        "Fly, Giant Carnivorous",
        "Harpy",
        "Hawk, Giant",
        "Hydra, Aquatic",
        "Men, Merchant",
        "Men, Pirate",
        "Merfolk",
        "Special:NPC Party",
        "Octopus, Giant",
        "Roc, Giant",
        "Sea Serpent",
        "Shark, Bull",
        "Shark, Giant",
        "Shark, Great White",
        "Shark, Mako",
        "Snake, Sea",
        "Squid, Giant",
        "Whale, Killer",
        "Whale, Narwhal",
        "Whale, Sperm"
    ]);

    wildernessEncounterTables["Swamp"] = new Table([
        "Basilisk",
        "Boar",
        "Dragon, Black",
        "Ghoul (Undead)",
        "Gnoll",
        "Goblin",
        "Leech, Giant",
        "Lizard, Giant Draco",
        "Lizardfolk",
        "Medusa",
        "Men, Brigand",
        "Nixie",
        "Ogre",
        "Orc",
        "Rhagodessa",
        "Spider, Giant Black Widow",
        "Stirge",
        "Toad, Giant",
        "Troglodyte",
        "Troll"
    ]);

    wildernessEncounterTables["Village/Town"] = new Table([
        "Boar",
        "Dwarf",
        "Elf",
        "Ghoul (Undead)",
        "Giant, Hill",
        "Gnoll",
        "Goblin",
        "Halfling",
        "Lycanthrope, Werewolf",
        "Men, Brigand",
        "Men, Merchant",
        "Morlock",
        "Special:NPC (any class)",
        "Special:NPC Party",
        "Ogre",
        "Orc",
        "Rat, Giant",
        "Spectre",
        "Vampire (Undead)",
        "Zombie (Undead)"
    ]);

    dungeonEncounterTables["1"] = new Table([
        "Bee, Giant Killer",
        "Beetle, Giant Fire",
        "Centipede, Giant",
        "Dwarf",
        "Gnome",
        "Goblin",
        "Green Slime",
        "Halfling",
        "Kobold",
        "Lizard, Giant Gecko",
        "Morlock",
        "Orc",
        "Rat, Giant",
        "Snake, Spitting Cobra",
        "Skeleton (Undead)",
        "Spider, Giant Crab",
        "Stirge",
        "Toad, Giant",
        "Wolf",
        "Zombie (Undead)"
     ])

    dungeonEncounterTables["2"] = new Table([
        "Bat, Giant",
        "Baboon, Higher",
        "Beetle, Giant Spitting",
        "Cat, Mountain Lion",
        "Elf",
        "Ghoul (Undead)",
        "Gnoll",
        "Gray Ooze",
        "Hobgoblin",
        "Lizard, Giant Draco",
        "Lizardfolk",
        "Locust, Subterranean",
        "Neanderthal",
        "Pixie",
        "Snake, Pit Viper",
        "Spider, Giant Black Widow",
        "Toad, Giant",
        "Troglodyte",
        "Yellow Mold",
        "Zombie (Undead)"
    ])

    dungeonEncounterTables["3"] = new Table([
        "Ant, Giant",
        "Ape, Albino",
        "Beetle, Giant Carnivorous",
        "Bugbear",
        "Cat, Panther",
        "Carcass Scavenger",
        "Doppelganger",
        "Fly, Giant Carnivorous",
        "Gargoyle",
        "Gelatinous Cube",
        "Harpy",
        "Lycanthrope, Wererat",
        "Medusa",
        "Special:NPC Group",
        "Ochre Jelly",
        "Ogre",
        "Shadow",
        "Spider, Giant Tarantula",
        "Throghrin",
        "Wight (Undead)"
    ])

    dungeonEncounterTables["4"] = new Table([
        "Bear, Cave",
        "Blink Dog",
        "Cockatrice",
        "Doppelganger",
        "Gray Ooze",
        "Hell Hound",
        "Lizard, Giant Tuatara",
        "Lycanthrope, Wereboar",
        "Lycanthrope, Werewolf",
        "Minotaur",
        "Mummy (Undead)",
        "Special:NPC Group",
        "Ochre Jelly",
        "Owl Bear",
        "Rhagodessa",
        "Rust Monster",
        "Spectre (Undead)",
        "Troll",
        "Worm, Gray",
        "Wraith (Undead)"
    ])

    dungeonEncounterTables["5"] = dungeonEncounterTables["4"];

    dungeonEncounterTables["6"]= new Table([
        "Basilisk",
        "Bear, Cave",
        "Black Pudding",
        "Dragon, White",
        "Gorgon",
        "Hell Hound",
        "Hydra",
        "Lycanthrope, Weretiger",
        "Minotaur",
        "Mummy (Undead)",
        "Special:NPC Group",
        "Ochre Jelly",
        "Owl Bear",
        "Phase Tiger",
        "Rust Monster",
        "Salamander, Flame",
        "Scorpion, Giant",
        "Spectre (Undead)",
        "Troll",
        "Worm, Gray"
    ])

    dungeonEncounterTables["7"] = dungeonEncounterTables["6"];

    dungeonEncounterTables["8"] = new Table([
        "Black Pudding",
        "Chimera",
        "Demon Boar",
        "Dragon, Black",
        "Dragon, Blue",
        "Dragon, Gold",
        "Dragon, Green",
        "Dragon, Red",
        "Giant, Hill",
        "Giant, Stone",
        "Golem, Bone",
        "Golem, Amber",
        "Hydra",
        "Lycanthrope, Werebear",
        "Manticore",
        "Special:NPC Group",
        "Purple Worm",
        "Salamander, Flame",
        "Salamander, Frost",
        "Vampire (Undead)"
    ])

    dungeonEncounterTables["9"] = dungeonEncounterTables["8"];
    dungeonEncounterTables["10"] = dungeonEncounterTables["8"];
    dungeonEncounterTables["11"] = dungeonEncounterTables["8"];
    dungeonEncounterTables["12"] = dungeonEncounterTables["8"];
    dungeonEncounterTables["13"] = dungeonEncounterTables["8"];
    dungeonEncounterTables["14"] = dungeonEncounterTables["8"];
    dungeonEncounterTables["15"] = dungeonEncounterTables["8"];

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
        var level = $("#re-dungeon-level").val().trim();
        var table = dungeonEncounterTables[level];
        if (table == undefined) {
            $('#re-result').html("Invalid dungeon level '" + level + "'");
        } else {
            var monster = table.getValue();
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
                            var numEncountered = mObject.get('enc_dungeon');
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
        }
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
