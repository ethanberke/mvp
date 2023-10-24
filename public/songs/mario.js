let conductor = new BandJS();
conductor.setTimeSignature(2, 2);
conductor.setTempo(160);


let rightHand = conductor.createInstrument('square', 'oscillators');
let leftHand = conductor.createInstrument('triangle', 'oscillators');
let drum = conductor.createInstrument('white', 'noises');

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

// Bar2
rightHand.rest('quarter')
    .note('quarter', 'C5, F#4')
    .note('quarter', 'E5, F#4')
    .rest('quarter');

leftHand.rest('quarter')
    .note('quarter', 'D3')
    .note('quarter', 'D3')
    .rest('quarter');

// Bar 3
rightHand.note('quarter', 'G5, B4, G4')
    .rest('quarter')
    .rest('half');

leftHand.rest('whole');

// Bar 4
rightHand.note('quarter', 'G4')
    .rest('quarter')
    .rest('half');

leftHand.note('quarter', 'G3')
    .rest('quarter')
    .rest('half');

// Bar 5
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

// bar 6
rightHand.rest('half')
    .note('quarter', 'E4, G3')
    .rest('quarter');

leftHand.rest('half')
    .note('quarter', 'C3')
    .rest('quarter');

// Bar 7
rightHand.rest('quarter')
    .note('quarter', 'A4, C4')
    .rest('quarter')
    .note('quarter', 'B4, D4');

leftHand.rest('quarter')
    .note('quarter', 'F3')
    .rest('quarter')
    .note('quarter', 'G3');

// Bar 8
rightHand.rest('quarter')
    .note('quarter', 'Bb4, Db4')
    .note('quarter', 'A4, C4')
    .rest('quarter');

leftHand.rest('quarter')
    .note('quarter', 'Gb3')
    .note('quarter', 'F3')
    .rest('quarter');

// Bar 9
rightHand.note('tripletHalf', 'G4, C4')
    .note('tripletHalf', 'E5, G4')
    .note('tripletHalf', 'G5, B4');

leftHand.note('tripletHalf', 'E3')
    .note('tripletHalf', 'C4')
    .note('tripletHalf', 'E4');

// Bar 10
rightHand.note('quarter', 'A5, C5')
    .rest('quarter')
    .note('quarter', 'F5, A4')
    .note('quarter', 'G5, B4');

leftHand.note('quarter', 'F4')
    .rest('quarter')
    .note('quarter', 'D4')
    .note('quarter', 'E4');

// Bar 11
rightHand.rest('quarter')
    .note('quarter', 'E5, G4')
    .rest('quarter')
    .note('quarter', 'C5, E4');

leftHand.rest('quarter')
    .note('quarter', 'C4')
    .rest('quarter')
    .note('quarter', 'A3');

// Bar 12
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

// Bar 21
rightHand.rest('half')
    .note('quarter', 'G5, E5')
    .note('quarter', 'Gb5, Eb5');

leftHand.note('quarter', 'C3')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'G3');

// Bar 22
rightHand.note('quarter', 'F5, D5')
    .note('quarter', 'D#5, B4')
    .rest('quarter')
    .note('quarter', 'E5, C5');

leftHand.rest('half')
    .note('quarter', 'C4')
    .rest('quarter');


// Bar 23
rightHand.rest('quarter')
    .note('quarter', 'G#4, E4')
    .note('quarter', 'A4, F4')
    .note('quarter', 'C5, A4');

leftHand.note('quarter', 'F3')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'C4');

// Bar 24
rightHand.rest('quarter')
    .note('quarter', 'A4, C4')
    .note('quarter', 'C5, E4')
    .note('quarter', 'D5, F4');

leftHand.note('quarter', 'C4')
    .rest('quarter')
    .note('quarter', 'F3')
    .rest('quarter');

// Bar 25
rightHand.rest('half')
    .note('quarter', 'G5, E5')
    .note('quarter', 'Gb5, Eb5');

leftHand.note('quarter', 'C3')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'E3');

// Bar 26
rightHand.note('quarter', 'F5, D5')
    .note('quarter', 'D#5, B4')
    .rest('quarter')
    .note('quarter', 'E5, C5');

leftHand.rest('half')
    .note('quarter', 'G3')
    .note('quarter', 'C4');

// Bar 27
rightHand.rest('quarter')
    .note('quarter', 'C6, G5, F5')
    .rest('quarter')
    .note('quarter', 'C6, G5, F5');

leftHand.rest('whole');

// Bar 28
rightHand.note('quarter', 'C6, G5, F5')
    .rest('quarter')
    .rest('half');

leftHand.rest('half')
    .note('quarter', 'G3')
    .rest('quarter');


// Bar 29
rightHand.rest('half')
    .note('quarter', 'G5, E5')
    .note('quarter', 'Gb5, Eb5');

leftHand.note('quarter', 'C3')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'G3');

// Bar 30
rightHand.note('quarter', 'F5, D5')
    .note('quarter', 'D#5, B4')
    .rest('quarter')
    .note('quarter', 'E5, C5');

leftHand.rest('half')
    .note('quarter', 'C4')
    .rest('quarter');

// Bar 31
rightHand.rest('quarter')
    .note('quarter', 'G#4, E4')
    .note('quarter', 'A4, F4')
    .note('quarter', 'C5, A4');

leftHand.note('quarter', 'F3')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'C4');

// Bar 32
rightHand.rest('quarter')
    .note('quarter', 'A4, C4')
    .note('quarter', 'C5, E4')
    .note('quarter', 'D5, F4');

leftHand.note('quarter', 'C4')
    .rest('quarter')
    .note('quarter', 'F3')
    .rest('quarter');

// Bar 33
rightHand.rest('half')
    .note('quarter', 'Eb5, Ab4')
    .rest('quarter');

leftHand.note('quarter', 'C3')
    .rest('quarter')
    .note('quarter', 'Ab3')
    .rest('quarter');

// Bar 34
rightHand.rest('quarter')
    .note('quarter', 'D5, F4')
    .rest('half');

leftHand.rest('quarter')
    .note('quarter', 'Bb3')
    .rest('half');

// Bar 35
rightHand.note('quarter', 'C5, E4')
    .rest('quarter')
    .rest('half');

leftHand.note('quarter', 'C4')
    .rest('quarter')
    .rest('quarter')
    .note('quarter', 'G3');

// Bar 36
rightHand.rest('whole');

leftHand.note('quarter', 'G3')
    .rest('quarter')
    .note('quarter', 'C3')
    .rest('quarter');

    //Underwater Theme
conductor.setTimeSignature(3, 4);
conductor.setTempo(176);

//Bar 1
rightHand.note('quarter', 'D4')
    .note('quarter', 'E4')
    .note('quarter', 'F#4')

leftHand.rest('quarter')
    .note('quarter', 'Db4')
    .note('quarter', 'C4')

//Bar 2
rightHand.note('quarter', 'G4')
    .note('quarter', 'A4')
    .note('quarter', 'A#4')

leftHand.note('quarter', 'B3')
    .note('quarter', 'C4')
    .note('quarter', 'C#4')

//Bar 3
rightHand.note('eighth', 'D4, B4')
    .note('eighth', 'D4, B4')
    .note('quarter', 'D4, B4')
    .note('quarter', 'D4, B4')

leftHand.rest('quarter')
    .rest('quarter')
    .note('quarter', 'G3')

//Bar 4
rightHand.note('half', 'F4, B4')
    .note('quarter', 'G4')

leftHand.note('dottedHalf', 'G3')

//Bar 5
rightHand.note('dottedHalf', 'G4, E5')

leftHand.note('quarter', 'C3')
    .note('quarter', 'E3')
    .note('quarter', 'G3')

//Bar 6

rightHand.note('dottedHalf', 'F#4, D#5')

leftHand.note('quarter', 'B2')
    .note('quarter', 'D#3')
    .note('quarter', 'G3')

    
//Bar 7
    
rightHand.note('dottedHalf', 'G4, E5')

leftHand.note('quarter', 'C2')
    .note('quarter', 'E2')
    .note('quarter', 'G2')

//Bar 8
rightHand.rest('eighth')
    .note('eighth', 'G4')
    .note('eighth', 'A4')
    .note('eighth', 'B4')
    .note('eighth', 'C5')
    .note('eighth', 'D5')

leftHand.note('quarter', 'E3')
    .note('quarter', 'G3')
    .note('quarter', 'C4')

//Bar 9
rightHand.note('dottedHalf', 'G4, E5')

leftHand.note('quarter', 'C3')
.note('quarter', 'E3')
.note('quarter', 'G3')

//Bar 10
rightHand.note('half', 'F#4, D#5')
    .note('quarter', 'Ab4, F5')

leftHand.note('quarter', 'B2')
    .note('quarter', 'D#3')
    .note('quarter', 'G3')

//Bar 11
rightHand.note('dottedHalf', 'G4, E5')

leftHand.note('quarter', 'C3')
.note('quarter', 'E3')
.note('quarter', 'G3')

//Bar 12
rightHand.rest('half')
    .rest('eighth')
    .note('eighth', 'G4')

leftHand.note('quarter', 'E3')
.note('quarter', 'G3')
.note('quarter', 'C4')

//Bar 13
rightHand.note('dottedHalf', 'F4, D5')

leftHand.note('quarter', 'D3')
    .note('quarter', 'G3')
    .note('quarter', 'B3')

//Bar 14
rightHand.note('dottedHalf', 'E4, C#5')

leftHand.note('quarter', 'C#3')
    .note('quarter', 'F#3')
    .note('quarter', 'A#3')

//Bar 15
rightHand.note('dottedHalf', 'F4, D5')

leftHand.note('quarter', 'D3')
    .note('quarter', 'G3')
    .note('quarter', 'B3')

//Bar 16
rightHand.rest('eighth')
    .note('eighth', 'G4')
    .note('eighth', 'A4')
    .note('eighth', 'B4')
    .note('eighth', 'C5')
    .note('eighth', 'C#5')

leftHand.note('quarter', 'B3')
    .note('quarter', 'G4')
    .note('quarter', 'B4')

//Bar 17
rightHand.note('dottedHalf', 'F4, D5')

leftHand.note('quarter', 'D3')
    .note('quarter', 'G3')
    .note('quarter', 'B3')

//Bar 18
rightHand.note('half', 'B3, G4')
    .note('quarter', 'A4, F5')

leftHand.note('quarter', 'B2')
    .note('quarter', 'G3')
    .note('quarter', 'B3')

//Bar 19
rightHand.note('dottedHalf', 'G4, E5')

leftHand.note('quarter', 'C3')
.note('quarter', 'E3')
.note('quarter', 'G3')

//Bar 20
rightHand.rest('half')
    .rest('eighth')
    .note('eighth', 'G4')

leftHand.note('quarter', 'G2')
    .note('quarter', 'G3')
    .note('quarter', 'C4')

//Bar 21
rightHand.note('dottedHalf', 'E5, G5')

leftHand.note('quarter', 'C3')
    .note('quarter', 'G3')
    .note('quarter', 'E4')

//Bar 22
rightHand.note('dottedHalf', 'D5, G5')

leftHand.note('quarter', 'B2')
    .note('quarter', 'G3')
    .note('quarter', 'D4')

//Bar 23
rightHand.note('dottedHalf', 'C#5, G5')

leftHand.note('quarter', 'A#2')
    .note('quarter', 'G3')
    .note('quarter', 'C#4')

//Bar 24
rightHand.note('quarter', 'G5')
    .note('quarter', 'A5')
    .rest('eighth')
    .note('eighth', 'G5')

    leftHand.note('quarter', 'C#3')
    .note('quarter', 'A3')
    .note('quarter', 'E4')

//Bar 25
rightHand.note('dottedHalf', 'D5, F5')

leftHand.note('quarter', 'D3')
    .note('quarter', 'A3')
    .note('quarter', 'F4')

//Bar 26
rightHand.note('dottedHalf', 'C#5, F5')

leftHand.note('quarter', 'C#3')
    .note('quarter', 'A3')
    .note('quarter', 'F4')

//Bar 27
rightHand.note('dottedHalf', 'C5, F5')

leftHand.note('quarter', 'C3')
    .note('quarter', 'A3')
    .note('quarter', 'F4')

//Bar 28
    rightHand.note('quarter', 'F5')
    .note('quarter', 'G5')
    .rest('eighth')
    .note('eighth', 'F5')

    leftHand.note('quarter', 'B2')
    .note('quarter', 'G3')
    .note('quarter', 'F4')

//Bar 29
    rightHand.note('dottedHalf', 'C5, E5')

    leftHand.note('quarter', 'E2')
    .note('quarter', 'G3')
    .note('quarter', 'E4')

//Bar 30
    rightHand.note('quarter', 'F4, A4')
        .note('quarter', 'G4, B4')
        .note('quarter', 'B4, F5')

    leftHand.note('quarter', 'G2')
        .note('quarter', 'G3')
        .note('quarter', 'G3')

//Bar 31
    rightHand.note('eighth', 'B4, E5')
        .note('eighth', 'B4, E5')
        .note('quarter', 'B4, E5')
        .rest('eighth')
        .note('eighth', 'F4, B4')

    leftHand.note('eighth', 'F3')
        .note('eighth', 'F3')
        .note('quarter', 'F3')
        .rest('eighth')
        .note('eighth', 'B2')

//Bar 32
    rightHand.note('dottedHalf', 'E4, C5')

    leftHand.note('dottedHalf', 'C3')


    let player = conductor.finish();
    export default() => {
        player.play()
    }