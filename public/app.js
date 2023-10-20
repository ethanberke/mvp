import playMario from "./songs/mario.js"
import playSuperman from "./songs/superman.js"
import playJump from "./songs/jump.js"
import playBatman from "./songs/batman.js"
import playHawaii from "./hawaii5o.js"
let playButton = document.querySelector(".playButton");
playButton.addEventListener('click', function() {
    playHawaii();
})



const profileInput = document.querySelector("input[name='submit']");
const profileContainer = document.querySelector(".profileLookup");

function createProfileElement(profile) {
  const p = document.createElement("p");
  p.addEventListener("click", () => {
    fetch(`/profiles/${profile.id}`, {
      method: "DELETE",
    }).then(() => {
      p.remove();
    });
  });
//   p.innerText = profile.num;
//   return p;
}


function getProfiles() {
  fetch(`/profiles?first_name=${firstName}&last_name=${lastName}`)
    .then((response) => response.json())
    .then((profiles) => {
        // profileContainer.innerHTML = "";

        if (profiles.length === 0) {
            console.log("No matching profiles found.");
        } else {
            profiles.forEach((profile) => {
                const element = createProfileElement(profile);
                profileContainer.appendChild(element);
            });
        }
    })
    .catch((error) => {
        console.error('Error fetching profiles:', error);
    });
}
getProfiles();




  //creating profile
  const form = document.querySelector(".createProfile-form");
  form.addEventListener("submit", (event) => {
    // Prevent form from trying to auto-submit.
    event.preventDefault();
  
    // Get data in the form.
    const formData = new FormData(event.target);
    const songName = formData.get('themesong');
    const branchName = formData.get('branch-name')
    const veteranInput = formData.get('ans') === 'yes' ? true : false;
    const branchIdMap = {
        'Army': 1,
        'Marine Corps': 2,
        'Navy': 3,
        'Air Force': 4,
        'Space Force': 5,
        'Coast Guard': 6
    };
    const songIdMap = {
        'Batman': 1,
        'FinalCountdown': 2,
        'Hawaii5o': 3,
        'Jump': 4,
        'Mario': 5,
        'Superman': 6
    };


    const branchId = branchIdMap[branchName];
    const songId = songIdMap[songName];

    const newProfile = {
    first_name: formData.get('fname'),
    last_name: formData.get('lname'),
    veteran: veteranInput,
    branch_id: branchId,
    song_id: songId
    }
    console.log(newProfile)
  fetch("/profiles", {
    method: "POST",
    // We must stringify the body, because fetch won't do it for us.
    body: JSON.stringify( newProfile ),
    headers: {
      // We must include this, or express doesn't know how to parse the body.
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((createdProfile) => {
      profileInput.value = "";
      getProfiles();
      console.log(`New profile data saved: ${createdProfile}`)
      // figure out what to do here
    })
    .catch((error) => {
        console.error('Error creating profile:', error);
    })
});



