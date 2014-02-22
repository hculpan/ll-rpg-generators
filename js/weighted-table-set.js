/**
 * Created by harry on 2/22/14.
 */

var WeightedTableSet = (function() {
    var _tables;
    var _mainTable;

    // constructor
    function WeightedTableSet() {

    }

    WeightedTableSet.prototype.addTable = function(tableName, tableArray) {
        if (this._tables == undefined) {
            this._tables = {}
            var weightedTable = new WeightedTable(tableArray);
            weightedTable.setName(tableName);
            this._mainTable = weightedTable;
            this._tables[tableName] = weightedTable;
        } else {
            var weightedTable = new WeightedTable(tableArray);
            weightedTable.setName(tableName);

            this._tables[tableName] = weightedTable;
        }
    }

    WeightedTableSet.prototype.getValue = function() {
        if (this._mainTable != undefined) {
            var value = this._mainTable.getValue();
            while (value['name'].substr(0, 6) == "Table:") {
                var table = this._tables[value['name'].substr(6)];
                if (table == undefined) {
                    throw "could not find table '" + value['name'].substr(6) + "'";
                }
                value = this._tables[value['name'].substr(6)].getValue();
            }
            return value;
        } else {
            throw "main table not initialized";
        }
    }

    WeightedTableSet.prototype.getText = function() {
        return this.getValue()['name'];
    }

    return WeightedTableSet;
})();

