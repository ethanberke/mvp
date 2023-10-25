let conductor = new BandJS();
conductor.setTimeSignature(4,4);
conductor.setTempo(140);

let trumpet = conductor.createInstrument('square');

let pianoLH = conductor.createInstrument();
let pianoRH = conductor.createInstrument();
let bass = conductor.createInstrument();
pianoLH.setVolume(50);
pianoRH.setVolume(50);
bass.setVolume(50);
trumpet.setVolume(60);

//Measure 1
trumpet.rest('whole');

pianoLH.note('quarter', 'Bb2')
    .note('eighth', 'F3')
    .note('eighth', 'F3')
    .note('quarter', 'F2')
    .note('eighth', 'F3')
    .note('eighth', 'F3');

pianoRH.rest('whole');

bass.note('half', 'Bb2')
     .note('half', 'F2');


//Measure 2
trumpet.rest('whole');

pianoLH.note('quarter', 'Bb2')
    .note('eighth', 'F3')
    .note('eighth', 'F2')
    .rest('eighth')
    .note('eighth', 'F2')
    .note('quarter', 'F3');
    
pianoRH.rest('whole');

bass.note('half', 'Bb2')
     .note('half', 'F2');

//Measure 3
trumpet.rest('whole');

pianoLH.note('quarter', 'Bb2')
    .note('eighth', 'F3')
    .note('eighth', 'F3')
    .note('quarter', 'F2')
    .note('eighth', 'F3')
    .note('eighth', 'F3');

pianoRH.rest('whole');

bass.note('half', 'Bb2')
     .note('half', 'F2');

//Measure 4
trumpet.rest('half')
    .rest('eighth')
    .note('eighth', 'D4')
    .note('eighth', 'Eb4')
    .note('eighth', 'E4');

pianoLH.note('quarter', 'Bb2')
    .rest('half')
    .rest('quarter');

pianoRH.rest('whole');

bass.note('quarter', 'Bb2')
     .rest('half')
     .rest('quarter');

//Measure 5, Rehearsal A

trumpet.note('quarter', 'F4')
    .note('eighth', 'D5')
    .note('eighth', 'F4')
    .note('eighth', 'D5')
    .note('eighth', 'C5')
    .rest('eighth')
    .note('quarter', 'B4');

pianoLH.note('quarter', 'D4', 'F4')
    .rest('quarter')
    .note('quarter', 'C4', 'F#4')
    .rest('eighth')
    .note('eighth', 'B3', 'G4');

pianoRH.note('quarter', 'Bb3')
    .rest('quarter')
    .note('quarter', 'D3')
    .rest('eighth')
    .note('eighth', 'G3');

bass.note('dottedQuarter', 'Bb2')
     .note('eighth', 'Bb2')
     .note('dottedQuarter', 'D3')
     .note('eighth', 'D3');
//Measure 6

trumpet.rest('half')
    .note('eighth', 'G4')
    .note('eighth', 'F#4')
    .note('eighth', 'F4');

pianoLH.note('whole', 'B3', 'G4');

pianoRH.note('whole', 'G3');

bass.note('dottedQuarter', 'G3')
     .note('eighth', 'G3')
     .note('quarter', 'D3')
     .note('quarter', 'D3');
//Measure 7

trumpet.note('quarter', 'E4')
    .note('eighth', 'C5')
    .note('eighth', 'E4')
    .note('eighth', 'C5')
    .note('eighth', 'Bb4')
    .rest('eighth')
    .note('quarter', 'A4');

pianoLH.note('quarter', 'C3')
    .rest('quarter')
    .note('quarter', 'Eb3')
    .rest('eighth')
    .note('eighth', 'F3');

pianoRH.note('quarter', 'E4', 'G4')
    .rest('quarter')
    .note('quarter', 'C4', 'G4')
    .rest('eighth')
    .note('eighth', 'C4', 'A4');

bass.note('dottedQuarter', 'C3')
     .note('eighth', 'G3')
     .note('dottedQuarter', 'C3')
     .note('eighth', 'C3');

//Measure 8
trumpet.rest('half')
    .note('eighth', 'F4')
    .note('eighth', 'E4')
    .note('eighth', 'Eb4');

pianoLH.note('whole', 'F3');

pianoRH.note('whole', 'C4', 'A4');

bass.note('eighth', 'F3')
     .note('eighth', 'F3')
     .note('quarter', 'Eb3')
     .note('quarter', 'D3')
     .note('quarter', 'C3');

//Measure 9
trumpet.note('eighth', 'D4')
    .note('eighth', 'F4')
    .note('eighth', 'Bb4')
    .note('eighth', 'G4')
    .rest('eighth')
    .note('eighth', 'Bb4')
    .note('quarter', 'C5');

pianoLH.note('dottedQuarter', 'Bb2')
    .note('dottedQuarter', 'Eb4')
    .note('quarter', 'Ab3');


pianoRH.note('dottedQuarter', 'Bb3', 'D4', 'F4')
    .note('dottedQuarter', 'Bb3', 'G4')
    .note('quarter', 'C3', 'Eb4', 'Ab4');

    bass.note('quarter', 'Bb2')
     .rest('eighth')
     .note('dottedQuarter', 'Eb3')
     .note('quarter', 'Ab3');

//Measure 10
trumpet.note('eighth', 'F4')
    .note('eighth', 'Ab4')
    .note('eighth', 'Db5')
    .note('eighth', 'Bb4')
    .rest('eighth')
    .note('eighth', 'Db5')
    .note('quarter', 'Eb5');

pianoLH.note('dottedQuarter', 'Db3')
//     .note('dottedQuarter', 'G3')
        .rest('dottedQuarter')
       .note('quarter', 'B3');
//pianoLH.rest('whole')

pianoRH.note('dottedQuarter', 'Db3', 'F4', 'Ab4')
    .note('dottedQuarter', 'Db3', 'Ab4', 'C5')
    .note('quarter', 'D#3', 'F#4', 'B4');
// pianoRH.rest('whole')

bass.note('quarter', 'Db3')
.rest('eighth')
.note('dottedQuarter', 'Gb3')
.note('quarter', 'B3');

//Measure 11
trumpet.note('whole', 'F5');

pianoLH.rest('quarter')
    .note('quarter', 'F3')
    .note('eighth', 'F3')
    .note('eighth', 'F3')
    .rest('eighth')
    .note('eighth', 'F3');

pianoRH.rest('quarter')
    .note('quarter', 'C4', 'F4', 'A4')
    .note('eighth', 'F3')
    .note('eighth', 'F3')
    .rest('eighth')
    .note('eighth', 'F3');

bass.note('dottedQuarter', 'F3')
    .note('eighth', 'Eb3')
    .note('dottedQuarter', 'C3')
    .note('eighth', 'Eb3');

//Measure 12
trumpet.rest('quarter')
    .note('eighth', 'F5')
    .note('eighth', 'F5')
    .note('eighth', 'G5')
    .note('eighth', 'F5')
    .note('sixteenth', 'Db5')
    .note('dottedEighth', 'C5')
    // .note('quarter', 'Bb4');

pianoLH.rest('quarter')
    .rest('quarter', 'Eb3')
    .note('quarter', 'D3')
    .note('quarter', 'C3');

pianoRH.rest('quarter')
    .note('quarter', 'C3', 'F3', 'A3');

bass.note('eighth', 'F3')
    .note('eighth', 'F3')
    .note('quarter', 'Eb3')
    .note('quarter', 'D3')
    .note('quarter', 'C3');

//Measure 5, Rehearsal A 2nd Time

trumpet.note('quarter', 'F4, D4')
    .note('eighth', 'D5, D4')
    .note('eighth', 'F4, D4')
    .note('eighth', 'D5, F4')
    .note('eighth', 'C5, F#4')
    .rest('eighth')
    .note('quarter', 'B4, G4');

pianoLH.note('quarter', 'D4', 'F4')
    .rest('quarter')
    .note('quarter', 'C4', 'F#4')
    .rest('eighth')
    .note('eighth', 'B3', 'G4')

pianoRH.note('quarter', 'Bb3')
    .rest('quarter')
    .note('quarter', 'D3')
    .rest('eighth')
    .note('eighth', 'G3');

bass.note('dottedQuarter', 'Bb2')
     .note('eighth', 'Bb2')
     .note('dottedQuarter', 'D3')
     .note('eighth', 'D3')
//Measure 6 2nd Time

trumpet.rest('half')
    .note('eighth', 'G4, A3')
    .note('eighth', 'F#4, Bb3')
    .note('eighth', 'F4, B3')

pianoLH.note('whole', 'B3', 'G4')

pianoRH.note('whole', 'G3')

bass.note('dottedQuarter', 'G3')
     .note('eighth', 'G3')
     .note('quarter', 'D3')
     .note('quarter', 'D3')
//Measure 7

trumpet.note('quarter', 'E4, C4')
    .note('eighth', 'C5')
    .note('eighth', 'E4')
    .note('eighth', 'C5, A4')
    .note('eighth', 'Bb4, G4')
    .rest('eighth')
    .note('quarter', 'A4, F4');

pianoLH.note('quarter', 'C3')
    .rest('quarter')
    .note('quarter', 'Eb3')
    .rest('eighth')
    .note('eighth', 'F3');

pianoRH.note('quarter', 'E4', 'G4')
    .rest('quarter')
    .note('quarter', 'C4', 'G4')
    .rest('eighth')
    .note('eighth', 'C4', 'A4');

bass.note('dottedQuarter', 'C3')
     .note('eighth', 'G3')
     .note('dottedQuarter', 'C3')
     .note('eighth', 'C3')

//Measure 8
trumpet.rest('half')
    .note('eighth', 'F4, D4')
    .note('eighth', 'E4, Db4')
    .note('eighth', 'Eb4, C4');

pianoLH.note('whole', 'F3');

pianoRH.note('whole', 'C4', 'A4');

bass.note('eighth', 'F3')
     .note('eighth', 'F3')
     .note('quarter', 'Eb3')
     .note('quarter', 'D3')
     .note('quarter', 'C3')

//Measure 9
trumpet.note('eighth', 'D4, Bb3')
    .note('eighth', 'F4, D4')
    .note('eighth', 'Bb4, F4')
    .note('eighth', 'G4, Eb4')
    .rest('eighth')
    .note('eighth', 'Bb4, G4')
    .note('quarter', 'C5, Ab4');

pianoLH.note('dottedQuarter', 'Bb2')
    .note('dottedQuarter', 'Eb4')
    .note('quarter', 'Ab3')


pianoRH.note('dottedQuarter', 'Bb3', 'D4', 'F4')
    .note('dottedQuarter', 'Bb3', 'G4')
    .note('quarter', 'C3', 'Eb4', 'Ab4') 

    bass.note('quarter', 'Bb2')
     .rest('eighth')
     .note('dottedQuarter', 'Eb3')
     .note('quarter', 'Ab3')

//Measure 10
trumpet.note('eighth', 'F4, Db4')
    .note('eighth', 'Ab4, F4')
    .note('eighth', 'Db5, Ab4')
    .note('eighth', 'Bb4, Gb4')
    .rest('eighth')
    .note('eighth', 'Db5, Bb4')
    .note('quarter', 'Eb5, B4');

pianoLH.note('dottedQuarter', 'Db3')
//     .note('dottedQuarter', 'G3')
        .rest('dottedQuarter')
       .note('quarter', 'B3')
//pianoLH.rest('whole')

pianoRH.note('dottedQuarter', 'Db3', 'F4', 'Ab4')
    .note('dottedQuarter', 'Db3', 'Ab4', 'C5')
    .note('quarter', 'D#3', 'F#4', 'B4') 
// pianoRH.rest('whole')

bass.note('quarter', 'Db3')
.rest('eighth')
.note('dottedQuarter', 'Gb3')
.note('quarter', 'B3')

//Measure 11
trumpet.note('whole', 'F5, A4');

pianoLH.rest('quarter')
    .note('quarter', 'F3')
    .note('eighth', 'F3')
    .note('eighth', 'F3')
    .rest('eighth')
    .note('eighth', 'F3')

pianoRH.rest('quarter')
    .note('quarter', 'C4', 'F4', 'A4')
    .note('eighth', 'F3')
    .note('eighth', 'F3')
    .rest('eighth')
    .note('eighth', 'F3')

bass.note('dottedQuarter', 'F3')
    .note('eighth', 'Eb3')
    .note('dottedQuarter', 'C3')
    .note('eighth', 'Eb3')

//Measure 12
trumpet.rest('quarter')
    .note('eighth', 'F5, A4')
    .note('eighth', 'F5, A4')
    .note('eighth', 'G5, Bb4')
    .note('eighth', 'F5, A4')
    .note('sixteenth', 'Db5, G4')
    .note('dottedEighth', 'C5, F4')
    .note('quarter', 'Bb4')

pianoLH.rest('quarter')
    .rest('quarter', 'Eb3')
    .note('quarter', 'D3')
    .note('quarter', 'C3')
    .note('quarter', 'Bb2')

pianoRH.rest('quarter')
    .note('quarter', 'C3', 'F3', 'A3')

bass.note('eighth', 'F3')
    .note('eighth', 'F3')
    .note('quarter', 'Eb3')
    .note('quarter', 'D3')
    .note('quarter', 'C3')
    .note('quarter', 'Bb2')

let player = conductor.finish();
export default() => {
    player.play()
}