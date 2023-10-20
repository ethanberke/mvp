let conductor = new BandJS();

conductor.setTimeSignature(4, 4);
conductor.setTempo(150);

let rightHand = conductor.createInstrument('square', 'oscillators');
let leftHand = conductor.createInstrument('square', 'oscillators');
let drum = conductor.createInstrument('white', 'noises');

drum.setVolume(50);

/**
 * Intro
 */
    // Bar 1
rightHand.rest('whole')

leftHand.note('eighth', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')

    // Bar 2
rightHand.rest('whole')

leftHand.note('eighth', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')

    //Bar 3
rightHand.note('eighth', 'F4, G4')
    .rest('eighth')
    .note('dottedHalf', 'F4, G4', 'tie')

leftHand.note('eighth', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')

    //Bar 4
    rightHand.note('quarter', 'F4, G4')
    .rest('dottedHalf')

leftHand.note('eighth', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, D3')

    //Bar 5
rightHand.rest('whole')

leftHand.note('eighth', 'C3, G3')
    .note('eighth', 'C3, G3')
    .note('eighth', 'C3, Gb3')
    .note('eighth', 'C3, Gb3')
    .note('eighth', 'C3, F3')
    .note('eighth', 'C3, F3')
    .note('eighth', 'C3, Gb3')
    .note('eighth', 'C3, Gb3')

    //Bar 6
rightHand.rest('whole')

leftHand.note('eighth', 'C3, G3')
    .note('eighth', 'C3, G3')
    .note('eighth', 'C3, Gb3')
    .note('eighth', 'C3, Gb3')
    .note('eighth', 'C3, F3')
    .note('eighth', 'C3, F3')
    .note('eighth', 'C3, Gb3')
    .note('eighth', 'C3, Gb3')

    //Bar 7
    rightHand.rest('whole')

leftHand.note('eighth', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')

    // Bar 8
rightHand.rest('whole')

leftHand.note('eighth', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')

    // Bar 9
rightHand.note('eighth', 'C5, D5')
    .rest('eighth')
    .note('dottedQuarter', 'C5, D5')
    .rest('dottedQuarter')

leftHand.note('eighth', 'D3, A3')
    .note('eighth', 'D3, A3')
    .note('eighth', 'D3, Ab3')
    .note('eighth', 'D3, Ab3')
    .note('eighth', 'D3, G3')
    .note('eighth', 'D3, G3')
    .note('eighth', 'D3, Ab3')
    .note('eighth', 'D3, A3')
    
    // Bar 10
rightHand.note('eighth', 'Bb4, C5')
    .rest('eighth')
    .note('dottedQuarter', 'Bb4, C5')
    .rest('dottedQuarter')

leftHand.note('eighth', 'C3, G3')
    .note('eighth', 'C3, G3')
    .note('eighth', 'C3, Gb3')
    .note('eighth', 'C3, Gb3')
    .note('eighth', 'C3, F3')
    .note('eighth', 'C3, F3')
    .note('eighth', 'C3, Gb3')
    .note('eighth', 'C3, G3')

    //Bar 11

rightHand.note('eighth', 'F4, G4')
    .rest('eighth')
    .note('dottedQuarter', 'F4, G4')

leftHand.note('eighth', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, C3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')

    //Bar 12

    rightHand.rest('whole')

leftHand.note('eighth', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, Db3')
    .note('eighth', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('eighth', 'A2, D3')

let player = conductor.finish();
export default() => {
    player.play()
}