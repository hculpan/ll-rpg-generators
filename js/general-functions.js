/**
 * Created by usucuha on 1/3/14.
 */

(function($) {

    // My micro jQuery templating engine
    // Usage:
    //
    //    <section data-html="content"></section>
    //
    // Will load <content.html> into <section>

    $(document).ready(function() {

        // Load external contents
        $("[data-html]").each(function() {
            el = $(this);
            var src = $(this).attr("data-html") + ".html";
            el.load(src);
        });

    });
})(jQuery);

function replaceVariable(template, varName, newText) {
    var re = new RegExp(varName,"g");
    var text = template.replace(re, newText);
    var matches = text.match(/\%_(.*?)\_%/);
    if (matches) {
        var submatch = matches[1];
        console.log('submatch = ' + submatch);
        var terms = submatch.split(/[Dd]/);
        var times = parseInt(terms[0]);
        console.log('terms = ' + terms);
        console.log('times = ' + times);
        console.log('sides = ' + terms[1]);
        var finalNum = 0;
        for (var i = 0; i < times; i++) {
            finalNum += rollDice(parseInt(terms[1]));
        }
        text = text.replace('%_' + submatch + '_%', finalNum.toString());
    }
    return text;
}

function rollDice(sides) {
    var num = Math.floor((Math.random() * sides) +1);
    return num;
}

function selectRandomValue(values) {
    var dieRoll = rollDice(values.length) - 1;
    return values[dieRoll];
}



