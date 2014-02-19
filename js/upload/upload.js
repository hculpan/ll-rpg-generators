/**
 * Created by harry on 2/18/14.
 */

function doUpload() {
    var EncounterTable = Parse.Object.extend('EncounterTable');
    var EncounterTableItem = Parse.Object.extend('EncounterTableItem');

    console.log("Doing upload...");
    for (var m in dungeonEncounters){
        var encounterTable = new EncounterTable();
        encounterTable.set('name', m);
        encounterTable.set('min', 1);
        encounterTable.set('max', 100);
        for (var i = 0; i < dungeonEncounters[m]._items.length; i++) {
            var monster = dungeonEncounters[m]._items[i];
            var encounterTableItem = new EncounterTableItem();
            encounterTableItem.set('parent', encounterTable);
            encounterTableItem.set('name', monster['name']);
            encounterTableItem.set('range', monster['range']);
            encounterTableItem.set('numEncountered', monster['numEncountered']);
            encounterTableItem.save();
        }
    }
}