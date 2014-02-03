/**
 * Created by harry on 2/3/14.
 */

trapsTable = new Table([
    'Arrow trap',
    'Arrow trap (poisoned)',
    'Collapsing ceiling',
    'Compacting ceiling',
    'Compacting walls',
    'Dropping ceiling',
    'False door',
    'False door with pit trap',
    'False door with poisoned needle',
    'Falling stones',
    'Flooding passage',
    'Flooding room',
    'Fire ball',
    'Gas (blinding)',
    'Gas (confusion)',
    'Gas (fear)',
    'Gas (poisonous)',
    'Gas (sleep)',
    'Gas (slowing)',
    'Lightning bolt',
    'Pit (10 ft deep) with poisonous spikes',
    'Pit (10 ft deep) with spikes',
    'Pit (10 ft deep), flooding',
    'Pit (10 ft deep, locks shut) with poisonous spikes',
    'Pit (10 ft deep, locks shut) with spikes',
    'Pit (10 ft deep, locks shut), flooding',
    'Porcullis trap',
    'Room (flooding)',
    'Room (elevator)',
    'Room (collapsing)',
    'Room (spiked)',
    'Room (compacting)',
    'Scything blade',
    'Sliding pit (spikes)',
    'Sliding pit (poisonous spikes)',
    'Sliding pit (flooding)',
    'Sliding pit (spikes, locks shut)',
    'Sliding pit (poisonous spikes, locks shut)',
    'Sliding pit (flooding, locks shut)',
    'Spear trap',
    'Spear trap (poisonous)',
    'Swinging ball/block',
    'Teleporter'
]);

function displayTrap() {
    $('#trap-main-result').html("<p>" + generateTrap() + "</p>");
}

function generateTrap() {
    return trapsTable.getValue();
}