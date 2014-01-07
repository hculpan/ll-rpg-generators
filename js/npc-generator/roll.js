/**
 * Created by usucuha on 12/27/13.
 */

function generateNpc() {
    if (validate()) {
        $('#message').text("");
        var num = getNumberNpc();
        console.log("num = " + num);
        var output = "";
        for (var i = 0; i < num; i++) {
            var val = generateSingleNpc();
            output += "<div class='col-md-12 col-lg-12 stat-block'>" + val + "</div>";
        }
        console.log(output);
        $('#main-result').html(output);
    } else {
        $('#message').text("You must enter the number of NPC's");
    }
}

