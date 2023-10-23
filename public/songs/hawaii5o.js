let conductor = new BandJS();

conductor.setTimeSignature(4, 4);
conductor.setTempo(150);

let rightHand = conductor.createInstrument('square', 'oscillators');
let leftHand = conductor.createInstrument('square', 'oscillators');
let drum = conductor.createInstrument('white', 'noises');

drum.setVolume(50);
leftHand.setVolume(50);
rightHand.setVolume(50);
/**
 * Intro
 */
    // Bar 1
rightHand.rest('quarter')
    .note('eighth', "A3")
    .note('eighth', "A3")
    .note('eighth', "C4")
    .note('eighth', "E4")
    .rest('eighth')
    .note('eighth', "A3, D4", 'tie');

    // Bar 2
rightHand.note('dottedQuarter', 'A3, D4')
    .note('eighth', 'A3', 'tie')
    .note('half', 'A3');

    //Bar 3
rightHand.rest('quarter')
    .note('eighth', 'A3')
    .note('eighth', 'A3')
    .note('eighth', 'G3')
    .note('eighth', 'C4')
    .rest('eighth')
    .note('eighth', 'F3, A3', 'tie');

    //Bar 4
rightHand.note('whole', 'F3, A3');

    //Bar 5
rightHand.rest('quarter')
    .note('eighth', 'A3')
    .note('eighth', 'A3')
    .note('eighth', 'C4')
    .note('eighth', 'E4')
    .rest('eighth')
    .note('eighth', 'A3, D4', 'tie');

    //Bar 6
rightHand.note('dottedQuarter', 'A3, D4')
    .note('eighth', 'F4, A4', 'tie')
    .note('half', 'F4, A4');

    //Bar 7
rightHand.rest('quarter')
    .note('eighth', 'G4')
    .note('eighth', 'G4')
    .note('eighth', 'E4')
    .note('eighth', 'C4')
    .rest('eighth')
    .note('eighth', 'F4, A4', 'tie');

    //Bar 8
rightHand.note('whole', 'F4, A4');
 

let player = conductor.finish();
export default() => {
    player.play()
}