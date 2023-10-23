let conductor = new BandJS();

conductor.setTimeSignature(4, 4);
conductor.setTempo(76);


let rightHand = conductor.createInstrument('square', 'oscillators');
let leftHand = conductor.createInstrument('triangle', 'oscillators');
let drum = conductor.createInstrument('white', 'noises');

leftHand.setVolume(50);
rightHand.setVolume(50);

/**
 * Intro
 */
    // Bar 1
rightHand.note('quarter', 'G4')
    .note('tripletEighth', 'G4')
    .note('tripletEighth', 'C4')
    .note('tripletEighth', 'G4')
    .note('half', "G4");

// Bar2
rightHand.note('quarter', 'C5')
    .note('quarter', 'G4')
    .note('half', 'C4');

// Bar 3
rightHand.note('quarter', 'G4')
    .note('tripletEighth', 'G4')
    .note('tripletEighth', 'C4')
    .note('tripletEighth', 'G4')
    .note('half', "G4");

// Bar 4
rightHand.note('sixteenth', 'F4, G4, C5, E5')
    .rest('eighth')
    .note('sixteenth', 'G4, B4, D5')
    .note('dottedHalf', 'G4, B4, D5')

// Bar 5
    rightHand.note('quarter', 'G3, G4')
    .note('tripletEighth', 'G3, G4')
    .note('tripletEighth', 'C3, C4')
    .note('tripletEighth', 'G3, G4')
    .note('half', "G3, G4");

// Bar 6
rightHand.note('quarter', 'C4, C5')
    .note('quarter', 'G3, G4')
    .note('half', 'C3, C4');

// Bar 7
    rightHand.note('tripletEighth', 'Eb4, Ab4, C5')
    rightHand.note('tripletEighth', 'Eb4, Ab4, C5')
    rightHand.note('tripletEighth', 'Eb4, Ab4, C5', 'tie')
    rightHand.note('tripletEighth', 'Eb4, Ab4, C5')
    rightHand.note('tripletEighth', 'F4, Bb4, D5')
    rightHand.note('tripletEighth', 'F4, Bb4, D5')
    rightHand.note('quarter', 'F4, Bb4, D5')
    rightHand.note('quarter', 'Db5, F5, Ab5');

// Bar 8
    rightHand.note('tripletEighth', 'C5, D5, F5, G5')
    rightHand.note('tripletEighth', 'C5, D5, F5, G5')
    rightHand.note('tripletEighth', 'C5, D5, F5, G5')
    rightHand.rest('tripletEighth')
    rightHand.note('tripletEighth', 'C5, D5, F5, G5')
    rightHand.note('tripletEighth', 'C5, D5, F5, G5')
    rightHand.note('tripletEighth', 'C5, D5, F5, G5')

let player = conductor.finish();
export default() => {
    player.play()
}