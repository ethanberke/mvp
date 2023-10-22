let conductor = new BandJS();

conductor.setTimeSignature(4, 4);
conductor.setTempo(123);


let rightHand = conductor.createInstrument('square', 'oscillators');
let leftHand = conductor.createInstrument('triangle', 'oscillators');
let drum = conductor.createInstrument('white', 'noises');

drum.setVolume(75);

/**
 * Intro
 */
    // Bar 1
rightHand.rest('quarter')
    .note('eighth', 'G4, B4, D5')
    .rest('quarter')
    .note('eighth', 'G4, C5, E5')
    .rest('quarter');

drum.rest('whole');
// Bar2
rightHand.note('eighth', 'F4, A4, C5')
    .rest('quarter')
    .note('eighth', 'F4, A4, C5')
    .rest('eighth')
    .note('eighth', 'G4, B4, D5')
    .rest('eighth')
    .note('eighth', 'G4, B4, D5', 'tie');

drum.rest('whole');

// Bar 3
rightHand.note('quarter', 'G4, B4, D5')
    .note('eighth', 'G4, C5, E5')
    .rest('quarter')
    .note('eighth', 'F4, A4, C5')
    .rest('eighth')
    .note('eighth', 'C4, F4, A4', 'tie');

    drum.rest('whole');
//Bar 4
rightHand.note('eighth', 'C4, F4, A4')
    .note('quarter', 'C4, E4, G4')
    .note('eighth', 'C4, D4, G4', 'tie')
    .note('half', 'C4, D4, G4')

drum.rest('dottedHalf')
    .rest('sixteenth')
    .note('thirtySecond')
    .rest('thirtySecond')
    .note('thirtySecond')
    .rest('thirtySecond')
    .note('thirtySecond')
    .note('thirtySecond')
//Bar 5
rightHand.rest('quarter')
    .note('eighth', 'G4, B4, D5')
    .rest('quarter')
    .note('eighth', 'G4, C5, E5')
    .rest('quarter');

drum.note('quarter')
    .rest('dottedHalf')

// Bar 6
rightHand.note('eighth', 'F4, A4, C5')
    .rest('quarter')
    .note('eighth', 'F4, A4, C5')
    .rest('eighth')
    .note('eighth', 'G4, B4, D5')
    .rest('eighth')
    .note('eighth', 'G4, B4, D5', 'tie');

// Bar 7
rightHand.note('quarter', 'G4, B4, D5')
    .note('eighth', 'G4, C5, E5')
    .rest('quarter')
    .note('eighth', 'F4, A4, C5')
    .rest('eighth')
    .note('eighth', 'C4, F4, A4', 'tie');

//Bar 8
rightHand.note('eighth', 'C4, F4, A4')
    .note('quarter', 'C4, E4, G4')
    .note('eighth', 'C4, D4, G4', 'tie')
    .note('half', 'C4, D4, G4');

//Bar 9 
rightHand.rest('quarter')
    .note('eighth', 'F5, A5, C6')
    .rest('quarter')
    .note('eighth', 'F5, A5, C6')
    .rest('quarter');

//Bar 10
rightHand.note('eighth', 'F5, A5, C6')
    .rest('quarter')
    .note('eighth', 'F5, A5, C6')
    .rest('quarter')
    .note('quarter', 'C5, E5, G5');

//Bar 11
rightHand.rest('quarter')
    .note('eighth', 'F4, A4, C5')
    .rest('quarter')
    .note('eighth', 'C4, F4, A4')
    .rest('eighth')
    .note('eighth', 'C4, F4, A4', 'tie');

//Bar 12
rightHand.note('eighth', 'C4, F4, A4')
    .note('eighth', 'E4, G4')
    .rest('eighth')
    .note('eighth', 'C4, D4, G4', 'tie')
    .note('half', 'C4, D4, G4')


let player = conductor.finish();
export default() => {
    player.play()
}