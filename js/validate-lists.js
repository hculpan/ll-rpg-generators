/**
 * Created by usucuha on 2/19/14.
 */

function doValidation() {
    var EncounterTable = Parse.Object.extend('EncounterTable');
    var query = new Parse.Query(EncounterTable);
    query.find({
        success: function(results) {
            for (var i = 0; i < results.length; i++) {
                var table = results[i];
                getDungeonEncounterTable(table.get('name'), undefined, function(table, callback) {
                    for (var j = 0; j < table._items.length; j++) {
                        checkForMonster(table.getName(), table._items[j]['name']);
                    }
                });
            }
        }
    });
}

function checkForMonster(tableName, monsterName) {
    var innerQuery = new Parse.Query("monsters");
    innerQuery.equalTo('name', monsterName);
    innerQuery.first({
        success: function(result) {
            if (result == undefined) {
                console.log(monsterName + ' not found in ' + tableName);
            } else {
//                console.log('found ' + result.get('name'));
            }
        },
        error: function(error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    })
}
