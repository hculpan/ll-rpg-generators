/**
 * Test class for weighted-table written
 * to be run under node.js
 *
 * Created by harry on 2/9/14.
 */



var fs = require('fs')
eval(fs.readFileSync('./js/weighted-table.js') + '');

myTable = new WeightedTable([
    { range: "01-03", name: "item 1"},
    { min: 4, max: 6, name: "item 2"},
    { range: "7",     name: "item 3"}
])

console.log(myTable._offset);
console.log(myTable.getSides());

console.log(myTable.getValue())
console.log(myTable.getValue())
console.log(myTable.getValue())
console.log(myTable.getValue())
console.log(myTable.getValue())
console.log(myTable.getValue())
console.log(myTable.getValue())
console.log(myTable.getValue())
