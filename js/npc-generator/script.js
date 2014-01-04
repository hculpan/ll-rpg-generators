function validate() {
    var val1 = $('#num_npc').val();
    var val2 = $('#party-level').val();
    return (val1 != "" && val1 != undefined) ||
        (val2 != "" && val2 != undefined);
}

function getNumberNpc() {
    return parseInt($('#num_npc').val());
}

function getPartyLevel() {
    return parseInt($('#party-level').val());
}

