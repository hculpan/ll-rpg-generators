/**
 * Created by harry on 2/3/14.
 */

$(document).ready(function() {
    $('.selectpicker').selectpicker();
});

function getHoardClass() {
    return $("#tg-hoard-class").val();
}

function checkIfPresent(text) {
    if (text == null || text == undefined) {
        return false;
    } else {
        var loc = text.indexOf(':');
        if (loc < 0) {
            return true;
        } else {
            loc = text.substr(0, loc);
            return (parseInt(loc) >= rollDice(100));
        }
    }
}

function parseRollText(text) {
    var loc = text.indexOf(':');
    if (loc < 0) {
        return text;
    } else {
        return text.substr(loc + 1);
    }
}

function generateCoins(rollText, coinType) {
    if (checkIfPresent(rollText)) {
        var text = parseRollText(rollText);
        var multiplier = 1;
        var multiplierLoc = text.indexOf('*');
        if (multiplierLoc > 0) {
            multiplier = parseInt(text.substr(multiplierLoc + 1));
            text = text.substr(0, multiplierLoc);
        }
        console.log('multiplier=' + multiplier + ", text=" + text);
        var value = diceRoller.roll(text).total * multiplier;
        var goldValue = value;
        if (coinType == "cp") {
            goldValue = value / 100;
        } else if (coinType == "sp") {
            goldValue = value / 10;
        } else if (coinType == "ep" ) {
            goldValue = value / 2;
        } else if (coinType == "pp") {
            goldValue = value * 10;
        }
        return [
            value.toString() + " " + coinType,
            goldValue
        ];
    } else {
        return null;
    }
}

function generateGems(rollText) {
    if (checkIfPresent(rollText)) {
        return displayGems(parseRollText(rollText));
    } else {
        return null;
    }
}

function generateJewelry(rollText) {
    if (checkIfPresent(rollText)) {
        return displayJewelry(parseRollText(rollText));
    } else {
        return null;
    }
}

function generateMagic(rollText) {
    if (checkIfPresent(rollText)) {
        return [
            "Magic: " + parseRollText(rollText),
            0
        ]
    } else {
        return null;
    }
}

function generateTreasure(hoardClass) {
    var resultSet = new Array();
    var hoardClassData = hoardClasses[hoardClass];
    if (hoardClassData != undefined) {
        resultSet.push(generateCoins(hoardClassData[0], 'cp'));
        resultSet.push(generateCoins(hoardClassData[1], 'sp'));
        resultSet.push(generateCoins(hoardClassData[2], 'ep'));
        resultSet.push(generateCoins(hoardClassData[3], 'gp'));
        resultSet.push(generateCoins(hoardClassData[4], 'pp'));
        resultSet.push(generateGems(hoardClassData[5]));
        resultSet.push(generateJewelry(hoardClassData[6]));
        resultSet.push(generateMagic(hoardClassData[7]));
    }
    return resultSet;
}

function generateTreasureText(hoardClass) {
    var results = generateTreasure(getHoardClass());
    var output = null;

    var totalValue = 0;
    for (var i = 0; i < results.length; i++) {
        if (results[i] != null) {
            if (output != null) {
                output += ", " + results[i][0];
                totalValue += results[i][1];
            } else {
                output = results[i][0];
                totalValue += results[i][1];
            }
        }
    }

    if (output != null) {
        output += " [hoard value " + totalValue + " gp]";
    } else {
        output = "no treasure";
    }

    return { gpValue: totalValue,
             output: output };
}

function displayTreasure() {
    var results = generateTreasure(getHoardClass());
    var output = null;

    var totalValue = 0;
    for (var i = 0; i < results.length; i++) {
        if (results[i] != null) {
            if (output != null) {
                output += ", " + results[i][0];
                totalValue += results[i][1];
            } else {
                output = results[i][0];
                totalValue += results[i][1];
            }
        }
    }

    if (output != null) {
        output += " [hoard value " + totalValue + " gp]";
    } else {
        output = "no treasure";
    }

    $('#tg-result').html(output);
}
