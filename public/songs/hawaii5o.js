let conductor = new BandJS();

conductor.setTimeSignature(4, 4);
conductor.setTempo(150);

let rightHand = conductor.createInstrument('square', 'oscillators');
let leftHand = conductor.createInstrument('triangle', 'oscillators');
let drum = conductor.createInstrument('white', 'noises');

drum.setVolume(50);
leftHand.setVolume(60);
rightHand.setVolume(60);
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

leftHand.rest('dottedHalf')
    .rest('eighth')
    .note('eighth', 'A2, D3', 'tie')

    // Bar 2
rightHand.note('dottedQuarter', 'A2, D3')
    .note('eighth', 'A2, D3', 'tie')
    .note('half', 'A2, D3');

leftHand.note('dottedQuarter', 'A2, D3')
    .note('eighth', "A2, D3")
    .note('half', 'A2, D3')

    //Bar 3
rightHand.rest('quarter')
    .note('eighth', 'A3')
    .note('eighth', 'A3')
    .note('eighth', 'G3')
    .note('eighth', 'C4')
    .rest('eighth')
    .note('eighth', 'F3, A3', 'tie');

leftHand.note('dottedQuarter', 'G2, C3')
    .note('eighth', "G2, C3")
    .note('half', 'G2, C3')

    //Bar 4
rightHand.note('whole', 'F3, A3');

leftHand.note('dottedQuarter', 'A2, D3')
    .note('eighth', "A2, D3")
    .note('half', 'A2, D3')

    //Bar 5
rightHand.rest('quarter')
    .note('eighth', 'A3')
    .note('eighth', 'A3')
    .note('eighth', 'C4')
    .note('eighth', 'E4')
    .rest('eighth')
    .note('eighth', 'A3, D4', 'tie');

leftHand.note('dottedQuarter', 'C3, F3')
    .note('eighth', "C3, F3")
    .note('half', 'C3, F3')

    //Bar 6
rightHand.note('dottedQuarter', 'A3, D4')
    .note('eighth', 'F4, A4', 'tie')
    .note('half', 'F4, A4');

leftHand.note('dottedQuarter', 'A2, D3')
    .note('eighth', "A2, D3")
    .note('half', 'A2, D3')
    //Bar 7
rightHand.rest('quarter')
    .note('eighth', 'G4')
    .note('eighth', 'G4')
    .note('eighth', 'E4')
    .note('eighth', 'C4')
    .rest('eighth')
    .note('eighth', 'F4, A4', 'tie');

leftHand.note('dottedQuarter', 'G2, C3')
    .note('eighth', "G2, C3")
    .note('half', 'G2, C3')

    //Bar 8
rightHand.note('whole', 'F4, A4');

leftHand.note('dottedQuarter', 'C3, F3')
    .note('eighth', "C3, F3")
    .note('half', 'C3, F3')
 
//Bar 9

rightHand.note('whole', 'E4, A4');

leftHand.note('dottedQuarter', 'C#3, E3, A3')
    .note('eighth', 'C#3, E3, A3')
    .note('half', 'C#3, E3, A3');

//Bar 10

rightHand.note('quarter', 'A4')
    .note('quarter', 'C5')
    .note('eighth', 'A4')
    .note('eighth', 'G4')
    .note('eighth', 'F4')
    .note('eighth', 'D4')

leftHand.note('dottedQuarter', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('half', 'A2, D3')
//Bar 11

rightHand.note('dottedQuarter', 'A4, D5')
    .note('eighth', 'A4, D5')
    .note('quarter', 'A4, D5')
    .note('quarter', 'E4')

leftHand.note('eighth', 'F3, A3')
    .note('eighth', 'G3')
    .note('eighth', 'F3')
    .note('eighth', 'A2, D3', 'tie')
    .note('half', 'A2, D3')
//Bar 12

rightHand.note('quarter', 'G4')
    .note('quarter', 'G4, D5')
    .note('eighth', 'B4')
    .note('eighth', 'A4')
    .note('eighth', 'G4')
    .note('eighth', 'E4')

leftHand.note('dottedQuarter', 'D3, G3')
    .note('eighth', 'D3, G3')
    .note('half', 'D3, G3')
//Bar 13

rightHand.note('eighth', 'D4')
    .note('eighth', 'C4')
    .note('eighth', 'Bb3')
    .note('quarter', 'C4')
    .note('eighth', 'D4')
    .note('quarter', 'E4')

leftHand.note('dottedQuarter', 'C3, F3')
    .note('eighth', 'C3, F3')
    .note('half', 'C3, F3')
//Bar 14

rightHand.note('dottedQuarter', 'D4')
    .note('eighth', 'A4', 'tie')
    .note('half', 'A4')

leftHand.note('dottedQuarter', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('half', 'A3, D3')
//Bar 15

rightHand.rest('quarter')
    .note('eighth', 'G4')
    .note('eighth', 'G4')
    .note('eighth', 'E4')
    .note('quarter', 'C4')
    .note('eighth', 'D4', 'tie')

leftHand.note('dottedQuarter', 'G2, C3')
    .note('eighth', 'G2, C3')
    .note('half', 'G3, C3')

//Bar 16

rightHand.note('whole', 'D4')


leftHand.note('dottedQuarter', 'A2, D3')
    .note('eighth', 'A2, D3')
    .note('half', 'A3, D3')
    .note('quarter', 'A3, D3')


let player = conductor.finish();
export default() => {
    player.play()
}