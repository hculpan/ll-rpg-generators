/**
 * Created by harry on 2/22/14.
 */

var fs = require('fs')
eval(fs.readFileSync('./js/weighted-table.js') + '');
eval(fs.readFileSync('./js/weighted-table-set.js') + '');

myTableSet = new WeightedTableSet();
myTableSet.addTable("main table", [
    { range: "01-03", name: "item 1"},
    { min: 4, max: 6, name: "Table:secondary-table-1"},
    { range: "7",     name: "item 3"}
])

myTableSet.addTable("secondary-table-1", [
    { range: "01-03", name: "Table:secondary-table-2"},
    { min: 4, max: 6, name: "item 1-2"},
    { range: "7",     name: "item 1-3"}
])

myTableSet.addTable("secondary-table-2", [
    { range: "01-03", name: "item 2-1"},
    { min: 4, max: 6, name: "item 2-2"},
    { range: "7",     name: "item 2-3"}
])

console.log(myTableSet.getValue())
console.log(myTableSet.getValue())
console.log(myTableSet.getValue())
console.log(myTableSet.getValue())
console.log(myTableSet.getValue())
console.log(myTableSet.getValue())
console.log(myTableSet.getValue())
console.log(myTableSet.getValue())
