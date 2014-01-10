/**
 * Created by harry on 1/7/14.
 */

function checkForEncounter() {
    var output = "No encounter";
    if (rollDice(6) == 1) {
         output = "You encountered something!";
    }
    $('#re-result').html(output);
}