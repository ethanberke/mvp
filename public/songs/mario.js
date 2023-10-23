let conductor = new BandJS();
conductor.setTimeSignature(2, 2);
conductor.setTempo(150);


let rightHand = conductor.createInstrument('square', 'oscillators');
let leftHand = conductor.createInstrument('triangle', 'oscillators');
let drum = conductor.createInstrument('white', 'noises');

drum.setVolume(50);
leftHand.setVolume(50);
rightHand.setVolume(50);
/**
 * Intro
 */
    // Bar 1
rightHand.note('quarter', 'E5, F#4')
    .note('quarter', 'E5, F#4')
    .rest('quarter')
    .note('quarter', 'E5, F#4');

leftHand.note('quarter', 'D3')
    .note('quarter', 'D3')
    .rest('quarter')
    .note('quarter', 'D3');

drum.rest('whole');

// Bar2
rightHand.rest('quarter')
    .note('quarter', 'C5, F#4')
    .note('quarter', 'E5, F#4')
    .rest('quarter');

leftHand.rest('quarter')
    .note('quarter', 'D3')
    .note('quarter', 'D3')
    .rest('quarter');

drum.rest('whole');

// Bar 3
rightHand.note('quarter', 'G5, B4, G4')
    .rest('quarter')
    .rest('half');

leftHand.rest('whole');

drum.rest('whole');

// Bar 4
rightHand.note('quarter', 'G4')
    .rest('quarter')
    .rest('half');

leftHand.note('quarter', 'G3')
    .rest('quarter')
    .rest('half');

drum.rest('whole');

// Bar 5/13
rightHand.repeatStart()
    .note('quarter', 'C5, E4')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'G4, C4');

leftHand.repeatStart()
    .note('quarter', 'G3')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'E3');

drum.repeatStart()
    .note('eighth', 'A4')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter', 'A4')
    .rest('tripletQuarter')
    .note('tripletQuarter', 'A4');

// bar 6/14
rightHand.rest('half')
    .note('quarter', 'E4, G3')
    .rest('quarter');

leftHand.rest('half')
    .note('quarter', 'C3')
    .rest('quarter');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 7/15
rightHand.rest('quarter')
    .note('quarter', 'A4, C4')
    .rest('quarter')
    .note('quarter', 'B4, D4');

leftHand.rest('quarter')
    .note('quarter', 'F3')
    .rest('quarter')
    .note('quarter', 'G3');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 8/16
rightHand.rest('quarter')
    .note('quarter', 'Bb4, Db4')
    .note('quarter', 'A4, C4')
    .rest('quarter');

leftHand.rest('quarter')
    .note('quarter', 'Gb3')
    .note('quarter', 'F3')
    .rest('quarter');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 9/17
rightHand.note('tripletHalf', 'G4, C4')
    .note('tripletHalf', 'E5, G4')
    .note('tripletHalf', 'G5, B4');

leftHand.note('tripletHalf', 'E3')
    .note('tripletHalf', 'C4')
    .note('tripletHalf', 'E4');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 10/18
rightHand.note('quarter', 'A5, C5')
    .rest('quarter')
    .note('quarter', 'F5, A4')
    .note('quarter', 'G5, B4');

leftHand.note('quarter', 'F4')
    .rest('quarter')
    .note('quarter', 'D4')
    .note('quarter', 'E4');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 11/19
rightHand.rest('quarter')
    .note('quarter', 'E5, G4')
    .rest('quarter')
    .note('quarter', 'C5, E4');

leftHand.rest('quarter')
    .note('quarter', 'C4')
    .rest('quarter')
    .note('quarter', 'A3');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 12/20
rightHand.note('quarter', 'D5, F4')
    .note('quarter', 'B4, D4')
    .rest('half');

// Repeat back to Bar 5
rightHand.repeat(1);

leftHand.note('quarter', 'B3')
    .note('quarter', 'G3')
    .rest('half');

// Repeat back to Bar 5
leftHand.repeat(1);

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

drum.repeat(1);

// Bar 21
rightHand.rest('half')
    .note('quarter', 'G5, E5')
    .note('quarter', 'Gb5, Eb5');

leftHand.note('quarter', 'C3')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'G3');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 22
rightHand.note('quarter', 'F5, D5')
    .note('quarter', 'D#5, B4')
    .rest('quarter')
    .note('quarter', 'E5, C5');

leftHand.rest('half')
    .note('quarter', 'C4')
    .rest('quarter');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 23
rightHand.rest('quarter')
    .note('quarter', 'G#4, E4')
    .note('quarter', 'A4, F4')
    .note('quarter', 'C5, A4');

leftHand.note('quarter', 'F3')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'C4');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 24
rightHand.rest('quarter')
    .note('quarter', 'A4, C4')
    .note('quarter', 'C5, E4')
    .note('quarter', 'D5, F4');

leftHand.note('quarter', 'C4')
    .rest('quarter')
    .note('quarter', 'F3')
    .rest('quarter');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 25
rightHand.rest('half')
    .note('quarter', 'G5, E5')
    .note('quarter', 'Gb5, Eb5');

leftHand.note('quarter', 'C3')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'E3');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 26
rightHand.note('quarter', 'F5, D5')
    .note('quarter', 'D#5, B4')
    .rest('quarter')
    .note('quarter', 'E5, C5');

leftHand.rest('half')
    .note('quarter', 'G3')
    .note('quarter', 'C4');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 27
rightHand.rest('quarter')
    .note('quarter', 'C6, G6, F6')
    .rest('quarter')
    .note('quarter', 'C6, G6, F6');

leftHand.rest('whole');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 28
rightHand.note('quarter', 'C6, G6, F6')
    .rest('quarter')
    .rest('half');

leftHand.rest('half')
    .note('quarter', 'G3')
    .rest('quarter');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 29
rightHand.rest('half')
    .note('quarter', 'G5, E5')
    .note('quarter', 'Gb5, Eb5');

leftHand.note('quarter', 'C3')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'G3');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 30
rightHand.note('quarter', 'F5, D5')
    .note('quarter', 'D#5, B4')
    .rest('quarter')
    .note('quarter', 'E5, C5');

leftHand.rest('half')
    .note('quarter', 'C4')
    .rest('quarter');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 31
rightHand.rest('quarter')
    .note('quarter', 'G#4, E4')
    .note('quarter', 'A4, F4')
    .note('quarter', 'C5, A4');

leftHand.note('quarter', 'F3')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'C4');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 32
rightHand.rest('quarter')
    .note('quarter', 'A4, C4')
    .note('quarter', 'C5, E4')
    .note('quarter', 'D5, F4');

leftHand.note('quarter', 'C4')
    .rest('quarter')
    .note('quarter', 'F3')
    .rest('quarter');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 33
rightHand.rest('half')
    .note('quarter', 'Eb5, Ab4')
    .rest('quarter');

leftHand.note('quarter', 'C3')
    .rest('quarter')
    .note('quarter', 'Ab3')
    .rest('quarter');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 34
rightHand.rest('quarter')
    .note('quarter', 'D5, F4')
    .rest('half');

leftHand.rest('quarter')
    .note('quarter', 'Bb3')
    .rest('half');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 35
rightHand.note('quarter', 'C5, E4')
    .rest('quarter')
    .rest('half');

leftHand.note('quarter', 'C4')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'G3');

drum.note('eighth')
    .rest('eighth')
    .rest('quarter')
    .note('tripletQuarter')
    .rest('tripletQuarter')
    .note('tripletQuarter');

// Bar 36
rightHand.rest('whole');

leftHand.note('quarter', 'G3')
    .rest('quarter')
    .note('quarter', 'C3')
    .rest('quarter');

drum.rest('whole');




let player = conductor.finish();
export default() => {
    player.play()
}