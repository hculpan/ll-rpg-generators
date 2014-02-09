/**
 * Created by harry on 2/9/14.
 */

function getDungeonEncounter(dungeonLevel) {
    var dungeonEncounter = dungeonEncounters['level' + dungeonLevel.toString()]
    if (dungeonEncounter != undefined) {
        var value = dungeonEncounter.getValue()
        while (value['name'].substr(0, 6) == 'Table:') {
            dungeonEncounter = dungeonEncounters[value['name'].substr(6)]
            value = dungeonEncounter.getValue()
        }
        return value;
    } else {
        return undefined
    }
}

var level1DungeonEncounters = new WeightedTable([
    { range: "01-03", name: "Bat",                      numEncountered: "1d100"},
    { range: "04",    name: "Bee, Giant Killer",        numEncountered: "1d6"},
    { range: "05-07", name: "Beetle, Giant Fire",       numEncountered: "1d4"},
    { range: "08-10", name: "Centipede, Giant",         numEncountered: "2d4"},
    { range: "11-12", name: "Dwarf",                    numEncountered: "1d6"},
    { range: "13",    name: "Elf",                      numEncountered: "1d4"},
    { range: "14",    name: "Elf, Deep",                numEncountered: "1d8"},
    { range: "15-17", name: "Fly, Giant Carnivorous",   numEncountered: "1d6"},
])

var level2DungeonEncounters = new WeightedTable([
    { range: "01-05", name: "Table:level1"},
    { range: "06-07", name: "Bat, Giant",               numEncountered: "1d10"}
])

var level3DungeonEncounters = new WeightedTable([
    { range: "01-05", name: "Table:level2"},
    { range: "06-07", name: "Ant, Giant",                numEncountered: "1d2"},
    { range: "08-09", name: "Ape, Albino",               numEncountered: "1d4"},
    { range: "10-11", name: "Bat, Giant",                numEncountered: "1d10"},
    { range: "12-13", name: "Beetle, Giant Carnivorous", numEncountered: "1d3"},
    { range: "14-15", name: "Beetle, Giant Spitting",    numEncountered: "1d8"},
    { range: "16-20", name: "Bugbear",                   numEncountered: "1d6"},
    { range: "21-22", name: "Carcass Scavenger",         numEncountered: "1d2"},
    { range: "23",    name: "Doppelganger",              numEncountered: "1"},
    { range: "24-25", name: "Dwarf, Duergar",            numEncountered: "2d6"},
    { range: "26-27", name: "Elf, Drow",                 numEncountered: "2d6"},
    { range: "28-29", name: "Gargoyle",                  numEncountered: "1d3"},
    { range: "30",    name: "Gelatinous Cube", numEncountered: "1"},
    { range: "31-33", name: "Ghoul (Undead)", numEncountered: "1d6"},
    { range: "34-36", name: "Gnoll", numEncountered: "2d4"},
    { range: "37", name: "Gray Ooze", numEncountered: "1"},
    { range: "38", name: "Green Slime", numEncountered: "1"},
    { range: "39-40", name: "Harpy", numEncountered: "1d4"},
    { range: "41-44", name: "Hobgoblin", numEncountered: "2d6"},
    { range: "45", name: "Lizard, Giant Draco", numEncountered: "1d2"},
    { range: "46", name: "Lizard, Giant Gecko", numEncountered: "1d6"},
    { range: "47-50", name: "Lizardfolk", numEncountered: "2d4"},
    { range: "51-52", name: "Lycanthrope, Wererat", numEncountered: "1d8"},
    { range: "53-54", name: "Neanderthal", numEncountered: "1d10"},
    { range: "55-57", name: "NPC Party", numEncountered: "1d6+2"},
    { range: "58-61", name: "Ogre", numEncountered: "1d3"},
    { range: "62", name: "Piercer", numEncountered: "3d6"},
    { range: "63", name: "Rot Grub", numEncountered: "5d4"},
    { range: "64", name: "Shadow", numEncountered: "1d8"},
    { range: "65", name: "Shrieker", numEncountered: "1d8"},
    { range: "66-67", name: "Snake, Giant Python", numEncountered: "1d2"},
    { range: "68-69", name: "Snake, Giant Rattler", numEncountered: "1d2"},
    { range: "70-71", name: "Snake, Pit Viper", numEncountered: "1d8"},
    { range: "72-73", name: "Spider, Giant Black Widow", numEncountered: "1d2"},
    { range: "74-75", name: "Spider, Giant Crab", numEncountered: "1d4"},
    { range: "76-77", name: "Spider, Giant Tarantula", numEncountered: "1d2"},
    { range: "78", name: "Statue, Animated Crystal", numEncountered: "1d4"},
    { range: "79-80", name: "Throgrin", numEncountered: "1d6"},
    { range: "81-82", name: "Tick, Giant", numEncountered: "2d4"},
    { range: "83-84", name: "Toad, Giant Poisonous", numEncountered: "1d4"},
    { range: "85-87", name: "Troglodyte", numEncountered: "1d8"},
    { range: "88-89", name: "Wight", numEncountered: "1d4"},
    { range: "90-91", name: "Wolf, Dire", numEncountered: "1d4"},
    { range: "92", name: "Yellow Mold", numEncountered: "1d4"},
    { range: "93-95", name: "Zombie", numEncountered: "2d6"},
    { range: "96-100", name: "Table:level4"}
])

var level4DungeonEncounters = new WeightedTable([
    { range: "01-05", name: "Table:level3"},
    { range: "06-07", name: "Ant, Giant", numEncountered: "1d6"},
    { range: "08-09", name: "Ape, Albino", numEncountered: "1d6"},
    { range: "10-11", name: "Ape, Man-Eating", numEncountered: "1d4"},
    { range: "12-13", name: "Beetle, Giant Carnivorous", numEncountered: "1d6"},
    { range: "14-15", name: "Blink Dog", numEncountered: "1d6"},
    { range: "16-20", name: "Bugbear", numEncountered: "2d6"},
    { range: "21-22", name: "Carcass Scavenger", numEncountered: "1d4"},
    { range: "23-27", name: "Table:demon_devil_dragon4", numEncountered: "1d3"}
])

var demonDevilDragon4DungeonEncounters = new WeightedTable([
    { range: "01-20", name: "Black Dragon", numEncountered: "1"},
    { range: "21-30", name: "Brass Dragon", numEncountered: "1"},
    { range: "31-50", name: "White Dragon", numEncountered: "1"},
    { range: "51-70", name: "Hydra", numEncountered: "1"},
    { range: "71-80", name: "Quasit", numEncountered: "1"},
    { range: "81-90", name: "Imp", numEncountered: "1"},
    { range: "91-100", name: "Succubus", numEncountered: "1"}
])

var dungeonEncounters = {
    level1: level1DungeonEncounters,
    level2: level2DungeonEncounters,
    level3: level3DungeonEncounters,
    level4: level4DungeonEncounters,
    demon_devil_dragon4: demonDevilDragon4DungeonEncounters
}