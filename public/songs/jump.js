let conductor = new BandJS();

conductor.setTimeSignature(4, 4);
conductor.setTempo(123);


let rightHand = conductor.createInstrument('square', 'oscillators');
let leftHand = conductor.createInstrument('triangle', 'oscillators');
let drum = conductor.createInstrument('white', 'noises');

drum.setVolume(75);
leftHand.setVolume(50);
rightHand.setVolume(50);
/**
 * Intro
 */
    // Bar 1
rightHand.rest('quarter')
    .note('eighth', 'G4, B4, D5')
    .rest('quarter')
    .note('eighth', 'G4, C5, E5')
    .rest('quarter');

leftHand.note('whole', 'C2, C3', 'tie')
// Bar2
rightHand.note('eighth', 'F4, A4, C5')
    .rest('quarter')
    .note('eighth', 'F4, A4, C5')
    .rest('eighth')
    .note('eighth', 'G4, B4, D5')
    .rest('eighth')
    .note('eighth', 'G4, B4, D5', 'tie');
    
leftHand.note('whole', 'C2, C3', 'tie')

// Bar 3
rightHand.note('quarter', 'G4, B4, D5')
    .note('eighth', 'G4, C5, E5')
    .rest('quarter')
    .note('eighth', 'F4, A4, C5')
    .rest('eighth')
    .note('eighth', 'C4, F4, A4', 'tie');

leftHand.note('dottedHalf', 'C2, C3', 'tie')
    .note('eighth', 'C2, C3')
    .note('eighth', 'F1, F2', 'tie');
//Bar 4
rightHand.note('eighth', 'C4, F4, A4')
    .note('quarter', 'C4, E4, G4')
    .note('eighth', 'C4, D4, G4', 'tie')
    .note('half', 'C4, D4, G4')

leftHand.note('dottedQuarter', 'F1, F2')
    .note('half', 'G1, G2')
    .rest('eighth')
//Bar 5
rightHand.rest('quarter')
    .note('eighth', 'G4, B4, D5')
    .rest('quarter')
    .note('eighth', 'G4, C5, E5')
    .rest('quarter');

leftHand.note('whole', 'C2, C3', 'tie')
// Bar 6
rightHand.note('eighth', 'F4, A4, C5')
    .rest('quarter')
    .note('eighth', 'F4, A4, C5')
    .rest('eighth')
    .note('eighth', 'G4, B4, D5')
    .rest('eighth')
    .note('eighth', 'G4, B4, D5', 'tie');

leftHand.note('whole', 'C2, C3', 'tie')
// Bar 7
rightHand.note('quarter', 'G4, B4, D5')
    .note('eighth', 'G4, C5, E5')
    .rest('quarter')
    .note('eighth', 'F4, A4, C5')
    .rest('eighth')
    .note('eighth', 'C4, F4, A4', 'tie');

leftHand.note('dottedHalf', 'C2, C3', 'tie')
    .note('eighth', 'C2, C3')
    .note('eighth', 'F1, F2', 'tie');
//Bar 8
rightHand.note('eighth', 'C4, F4, A4')
    .note('quarter', 'C4, E4, G4')
    .note('eighth', 'C4, D4, G4', 'tie')
    .note('half', 'C4, D4, G4');

leftHand.note('dottedQuarter', 'F1, F2')
    .note('half', 'G1, G2')
    .rest('eighth')
//Bar 9 
rightHand.rest('quarter')
    .note('eighth', 'F5, A5, C6')
    .rest('quarter')
    .note('eighth', 'F5, A5, C6')
    .rest('quarter');

leftHand.note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
//Bar 10
rightHand.note('eighth', 'F5, A5, C6')
    .rest('quarter')
    .note('eighth', 'F5, A5, C6')
    .rest('quarter')
    .note('quarter', 'C5, E5, G5');

leftHand.note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
//Bar 11
rightHand.rest('quarter')
    .note('eighth', 'F4, A4, C5')
    .rest('quarter')
    .note('eighth', 'C4, F4, A4')
    .rest('eighth')
    .note('eighth', 'C4, F4, A4', 'tie');

leftHand.note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'C2, C3')
    .note('eighth', 'F1,F2')
//Bar 12
rightHand.note('eighth', 'C4, F4, A4')
    .note('eighth', 'E4, G4')
    .rest('eighth')
    .note('eighth', 'C4, D4, G4', 'tie')
    .note('half', 'C4, D4, G4')

leftHand.note('eighth', 'C2, C3')
    .note('eighth', 'F1, F2')
    .note('eighth', 'F1, F2')
    .note('eighth', 'F1, F2')
    .note('eighth', 'G1, G2')
    .note('eighth', 'G1, G2')
    .note('eighth', 'G1, G2')
    .note('eighth', 'G1, G2')

let player = conductor.finish();
export default() => {
    player.play()
}