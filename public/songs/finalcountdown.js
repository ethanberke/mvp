let conductor = new BandJS();

conductor.setTimeSignature(4, 4);
conductor.setTempo(120);


let rightHand = conductor.createInstrument('square', 'oscillators');
let leftHand = conductor.createInstrument('triangle', 'oscillators');
let drum = conductor.createInstrument('white', 'noises');

drum.setVolume(75);
leftHand.setVolume(75);
/**
 * Intro
 */
    // Bar 1
rightHand.rest('whole')

leftHand.note('sixteenth', 'A2')
    .note('sixteenth', 'B2')
    .note('sixteenth', 'C3')
    .note('sixteenth', 'D3')
    .note('quarter', 'E3')
    .note('sixteenth', 'A2')
    .note('sixteenth', 'B2')
    .note('sixteenth', 'C3')
    .note('sixteenth', 'D3')
    .note('quarter', 'E3')
// Bar2
rightHand.rest('whole')

leftHand.note('sixteenth', 'A2')
    .note('sixteenth', 'B2')
    .note('sixteenth', 'C3')
    .note('sixteenth', 'D3')
    .note('quarter', 'E3')
    .note('sixteenth', 'A2')
    .note('sixteenth', 'B2')
    .note('sixteenth', 'C3')
    .note('sixteenth', 'D3')
    .note('quarter', 'E3')

// Bar 3
rightHand.rest('quarter')
    .rest('eighth')
    .note('sixteenth', 'E5')
    .note('sixteenth', 'D5')
    .note('quarter', 'E5')
    .note('quarter', 'A4', 'tie');

leftHand.note('dottedHalf', 'A2', 'tie')
    .note('eighth', 'A2')
    .note('eighth', 'A2')
//Bar 4
rightHand.note('dottedQuarter', 'A4')
    .note('sixteenth', 'F5')
    .note('sixteenth', 'E5')
    .note('eighth', 'F5')
    .note('eighth', 'E5')
    .note('quarter', 'D5', 'tie');

    leftHand.note('dottedHalf', 'F2', 'tie')
    .note('eighth', 'F2')
    .note('eighth', 'F2')
//Bar 5
rightHand.note('dottedQuarter', 'D5')
    .note('sixteenth', 'F5')
    .note('sixteenth', 'E5')
    .note('quarter', 'F5')
    .note('quarter', 'A4');

    leftHand.note('dottedHalf', 'D2', 'tie')
    .note('eighth', 'D2')
    .note('eighth', 'D2')
// Bar 6
rightHand.note('dottedQuarter', 'B4')
    .note('sixteenth', 'D5')
    .note('sixteenth', 'C5')
    .note('eighth', 'D5')
    .note('eighth', 'C5')
    .note('eighth', 'B4')
    .note('eighth', 'D5')

leftHand.note('whole', 'G2')
// Bar 7
rightHand.note('quarter', 'C5')
    .rest('eighth')
    .note('sixteenth', 'E5')
    .note('sixteenth', 'D5')
    .note('quarter', 'E5')
    .note('quarter', 'A4', 'tie');

leftHand.note('dottedHalf', 'A2', 'tie')
    .note('eighth', 'A2')
    .note('eighth', 'A2')
//Bar 8
rightHand.note('dottedQuarter', 'A4')
    .note('sixteenth', 'F5')
    .note('sixteenth', 'E5')
    .note('eighth', 'F5')
    .note('eighth', 'E5')
    .note('quarter', 'D5', 'tie');

    leftHand.note('dottedHalf', 'F2', 'tie')
    .note('eighth', 'F2')
    .note('eighth', 'F2')
//Bar 9 
rightHand.note('dottedQuarter', 'D5')
    .note('sixteenth', 'F5')
    .note('sixteenth', 'E5')
    .note('quarter', 'F5')
    .note('quarter', 'A4');

    leftHand.note('dottedHalf', 'D2', 'tie')
    .note('eighth', 'D2')
    .note('eighth', 'D2')
//Bar 10
rightHand.note('dottedQuarter', 'B4')
    .note('sixteenth', 'D5')
    .note('sixteenth', 'C5')
    .note('eighth', 'D5')
    .note('eighth', 'C5')
    .note('eighth', 'B4')
    .note('eighth', 'D5')

leftHand.note('whole', 'G2')
//Bar 11
rightHand.note('dottedQuarter', 'C5')
    .note('sixteenth', 'B4')
    .note('sixteenth', 'C5')
    .note('dottedQuarter', 'D5')
    .note('sixteenth', 'C5')
    .note('sixteenth', 'D5')

leftHand.note('half', 'A2')
    .note('half', 'G2')
//Bar 12
rightHand.note('eighth', 'E5')
    .note('eighth', 'D5')
    .note('eighth', 'C5')
    .note('eighth', 'B4')
    .note('quarter', 'A4')
    .note('quarter', 'F5')

    leftHand.note('half', 'C3')
    .note('half', 'F2')

let player = conductor.finish();
export default() => {
    player.play()
}