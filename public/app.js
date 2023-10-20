import playMario from "./songs/mario.js"



const form = document.querySelector(".createProfile-form");
const thingies = document.querySelector(".thingies");
const numInput = document.querySelector("input[name='num']");


let playButton = document.querySelector(".playButton");
playButton.addEventListener('click', function() {
    playMario();
})

function createUserElement(user) {
  const p = document.createElement("p");
  p.addEventListener("click", () => {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    }).then(() => {
      p.remove();
    });
  });
  p.innerText = user.num;

  return p;
}

function getUsers() {
  fetch("/users")
    .then((response) => response.json())
    .then((things) => {
      thingies.innerText = "";
      for (let thing of things) {
        const element = createUserElement(thing);
        thingies.append(element);
      }
    });
}

getUsers();

form.addEventListener("submit", (event) => {
  // Prevent form from trying to auto-submit.
  event.preventDefault();

  // Get data in the form.
  const formData = new FormData(event.target);
  const user = formData.get("user");

  fetch("/users", {
    method: "POST",
    // We must stringify the body, because fetch won't do it for us.
    body: JSON.stringify({ user }),
    headers: {
      // We must include this, or express doesn't know how to parse the body.
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((user) => {
      userInput.value = "";
      getUsers();
      // figure out what to do here
    });
});





// let conductor = new BandJS();
// conductor.setTimeSignature(4,4);
// conductor.setTempo(140);

// let playButton = document.querySelector(".playButton");
// playButton.addEventListener('click', function() {
//     player.play()
// })

// let trumpet = conductor.createInstrument('square');
// let trumpet2 = conductor.createInstrument('square');
// let pianoLH = conductor.createInstrument();
// let pianoRH = conductor.createInstrument();
// let bass = conductor.createInstrument();

// //Measure 4
// trumpet.rest('half')
//     .rest('eighth')
//     .note('eighth', 'D4')
//     .note('eighth', 'Eb4')
//     .note('eighth', 'E4');

// trumpet2.rest('whole');

// pianoLH.note('quarter', 'Bb2')
//     .rest('half')
//     .rest('quarter');

// pianoRH.rest('whole');

// bass.note('quarter', 'Bb2')
//      .rest('half')
//      .rest('quarter');

// //Measure 5, Rehearsal A

// trumpet.note('quarter', 'F4')
//     .note('eighth', 'D5')
//     .note('eighth', 'F4')
//     .note('eighth', 'D5')
//     .note('eighth', 'C5')
//     .rest('eighth')
//     .note('quarter', 'B4');

// trumpet2.rest('whole');

// pianoLH.note('quarter', 'D4', 'F4')
//     .rest('quarter')
//     .note('quarter', 'C4', 'F#4')
//     .rest('eighth')
//     .note('eighth', 'B3', 'G4');

// pianoRH.note('quarter', 'Bb3')
//     .rest('quarter')
//     .note('quarter', 'D3')
//     .rest('eighth')
//     .note('eighth', 'G3');

// bass.note('dottedQuarter', 'Bb2')
//      .note('eighth', 'Bb2')
//      .note('dottedQuarter', 'D3')
//      .note('eighth', 'D3');

//      let player = conductor.finish();

