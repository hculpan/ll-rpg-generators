/**
 * Created by harry on 2/3/14.
 */

gemsTable = new Table([
    10,
    10,
    10,
    25,
    25,
    25,
    50,
    50,
    50,
    75,
    75,
    75,
    100,
    100,
    100,
    250,
    250,
    500,
    750,
    1000
]);

jewelryTable = new Table([
    '1d4x10',
    '1d4x10',
    '2d4x10',
    '1d4x100',
    '2d4x100',
    '2d6x100',
    '3d6x100',
    '3d6x100',
    '3d6x100',
    '3d6x100'
]);

function generateRandomJewelry() {
    var jewelText = jewelryTable.getValue();
    var fields = jewelText.split('x');
    var result = diceRoller.roll(fields[0]).total;
    result *= parseInt(fields[1]);
    return result;
}

function displayGems(rollText) {
    var num = diceRoller.roll(rollText).total;
    var total = 0;
    var output = num.toString() + (num == 1 ? " gem (" : " gems (");
    for (var i = 0; i < num; i++) {
        var value = gemsTable.getValue();
        if (i > 0) {
            output += ", ";
        }
        output += value.toString();
        total += value;
    }
    output += " gp)";
    return [
        output,
        total
    ]
}

function displayJewelry(rollText) {
    var num = diceRoller.roll(rollText).total;
    var total = 0;
    var output = num.toString() + " jewelry (";
    for (var i = 0; i < num; i++) {
        var value = generateRandomJewelry();
        if (i > 0) {
            output += ", ";
        }
        output += value.toString();
        total += value;
    }
    output += " gp)";
    return [
        output,
        total
    ]
}

function generateUnprotectedTreasure(dungeonLevel) {
    var output = "";
    var goldValue = 0;
    var value;

    switch (dungeonLevel) {
        case 1:
            value = diceRoller.roll("2d4").total * 100;
            output += value.toString() + " sp";
            goldValue += value/10;
            if (rollDice(100) <=50) {
                value = rollDice(4) * 10;
                goldValue += value;
                output += ", " + value.toString() + " gp";
            }
            if (rollDice(100) <= 7) {
                var gems = displayGems("1d4");
                output += ", " + gems[0];
                goldValue += gems[1];
            }
            if (rollDice(100) <= 5) {
                var gems = displayJewelry("1d4");
                output += ", " + gems[0];
                goldValue += gems[1];
            }
            if (rollDice(100) <= 3) {
                output += ", 1 magic item";
            }
            break;
        case 2:
            value = diceRoller.roll("2d6").total * 100;
            output += value.toString() + " sp";
            goldValue += value/10;
            if (rollDice(100) <=50) {
                value = rollDice(6) * 100;
                goldValue += value;
                output += ", " + value.toString() + " gp";
            }
            if (rollDice(100) <= 13) {
                var gems = displayGems("1d6");
                output += ", " + gems[0];
                goldValue += gems[1];
            }
            if (rollDice(100) <= 8) {
                var gems = displayJewelry("1d6");
                output += ", " + gems[0];
                goldValue += gems[1];
            }
            if (rollDice(100) <= 5) {
                output += ", 1 magic item";
            }
            break;
        case 3:
            value = diceRoller.roll("2d8").total * 100;
            output += value.toString() + " sp";
            goldValue += value/10;
            if (rollDice(100) <=50) {
                value = diceRoller.roll("2d4").total * 100;
                goldValue += value;
                output += ", " + value.toString() + " gp";
            }
            if (rollDice(100) <= 15) {
                var gems = displayGems("1d6");
                output += ", " + gems[0];
                goldValue += gems[1];
            }
            if (rollDice(100) <= 10) {
                var gems = displayJewelry("1d6");
                output += ", " + gems[0];
                goldValue += gems[1];
            }
            if (rollDice(100) <= 7) {
                output += ", 1 magic item";
            }
            break;
        case 4:
        case 5:
            value = diceRoller.roll("1d8").total * 1000;
            output += value.toString() + " sp";
            goldValue += value/10;

            value = diceRoller.roll("3d4").total * 100;
            goldValue += value;
            output += ", " + value.toString() + " gp";

            if (rollDice(100) <= 20) {
                var gems = displayGems("1d8");
                output += ", " + gems[0];
                goldValue += gems[1];
            }
            if (rollDice(100) <= 10) {
                var gems = displayJewelry("1d8");
                output += ", " + gems[0];
                goldValue += gems[1];
            }
            if (rollDice(100) <= 9) {
                output += ", 1 magic item";
            }
            break;
        case 6:
        case 7:
            value = diceRoller.roll("1d8").total * 2000;
            output += value.toString() + " sp";
            goldValue += value/10;

            value = diceRoller.roll("1d4").total * 1000;
            goldValue += value;
            output += ", " + value.toString() + " gp";

            if (rollDice(100) <= 30) {
                var gems = displayGems("1d8");
                output += ", " + gems[0];
                goldValue += gems[1];
            }
            if (rollDice(100) <= 15) {
                var gems = displayJewelry("1d8");
                output += ", " + gems[0];
                goldValue += gems[1];
            }
            if (rollDice(100) <= 15) {
                output += ", 1 magic item";
            }
            break;
        default:
            value = diceRoller.roll("1d8").total * 4000;
            output += value.toString() + " sp";
            goldValue += value/10;

            value = diceRoller.roll("2d4").total * 1000;
            goldValue += value;
            output += ", " + value.toString() + " gp";

            if (rollDice(100) <= 40) {
                var gems = displayGems("2d6");
                output += ", " + gems[0];
                goldValue += gems[1];
            }
            if (rollDice(100) <= 20) {
                var gems = displayJewelry("2d6");
                output += ", " + gems[0];
                goldValue += gems[1];
            }
            if (rollDice(100) <= 20) {
                output += ", 1 magic item";
            }
    }

    return { gpValue: goldValue,
             output: output + " [total gold value = " + goldValue.toString() + "]"};
}