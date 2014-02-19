/**
 * Created by harry on 2/9/14.
 */

var dungeonEncounters = {}

function getDungeonEncounterByLevel(dungeonLevel, callback) {
    getDungeonEncounter('Dungeon Encounters: Level ' + dungeonLevel.toString(), callback);
}

function getDungeonEncounterTable(tableName, valueCallback, callback) {
    var result = dungeonEncounters[tableName];
    if (result == undefined) {
        console.log('loading table ' + tableName);
        var EncounterTable = Parse.Object.extend('EncounterTable');
        var EncounterTableItem = Parse.Object.extend('EncounterTableItem');

        var query = new Parse.Query(EncounterTable);
        query.equalTo("name", tableName);
        query.find({
            success: function(results) {
                var table = results[0];
                var queryInner = new Parse.Query(EncounterTableItem);
                queryInner.equalTo("parent", table);
                queryInner.ascending("range");
                queryInner.find({
                    success: function(results) {
                        var wTable = new WeightedTable([]);
                        wTable.setSides(table.get('max'));
                        wTable.setOffset(table.get('min'));
                        wTable.setName(table.get('name'));
                        for (var i = 0; i < results.length; i++) {
                            var o = results[i];
                            wTable.addItem({
                                name: o.get('name'),
                                range: o.get('range'),
                                numEncountered:o.get('numEncountered')
                            });
                        }
                        dungeonEncounters[tableName] = wTable;
                        callback(wTable, valueCallback);
                    }
                });
            }
        });
    } else {
        console.log("returning cached table");
        callback(result, valueCallback)
    }
}

function _getDungeonEncounterInner(table, callback) {
    if (table != undefined) {
        var value = table.getValue()
        if (value['name'].substr(0, 6) == 'Table:') {
            getDungeonEncounter(value['name'].substr(6), callback);
        } else {
            callback(value);
        }
    } else {
        callback(undefined);
    }
}

function getDungeonEncounter(tableName, callback) {
    getDungeonEncounterTable(tableName, callback, function(table, callback) {
        _getDungeonEncounterInner(table, callback);
    });
}

