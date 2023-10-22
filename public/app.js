import playMario from "./songs/mario.js"
import playSuperman from "./songs/superman.js"
import playJump from "./songs/jump.js"
import playBatman from "./songs/batman.js"
import playHawaii from "./songs/hawaii5o.js"

let playButton = document.querySelector(".playButton");
playButton.addEventListener('click', function() {
    // playMario();
    // playSuperman();
     playJump();
    // playBatman();
    // playHawaii();
})

const finduserNameInput = document.getElementById("findfname");
const createUsernameInput = document.getElementById("createfname");
const findBtn = document.getElementById("findBtn");
const createBtn = document.getElementById("createBtn");
const profileContainer = document.querySelector(".profileLookup");
const createProfileForm = document.querySelector(".createProfile-form");

createProfileForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(createProfileForm);
    const songName = formData.get('themesong');
    const branchName = formData.get('branch-name');
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
        username: formData.get('uname'),
        first_name: formData.get('fname'),
        last_name: formData.get('lname'),
        veteran: veteranInput,
        branch_id: branchId,
        song_id: songId
    };

    fetch("/profiles", {
        method: "POST",
        body: JSON.stringify(newProfile),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((createdProfile) => {
        //profileContainer.innerHTML = ""; // Clear the existing profiles.
        //getProfiles(); // Refresh the profiles
        console.log(`New profile data saved: ${JSON.stringify(createdProfile)}`);
    })
    .catch((error) => {
        console.error('Error creating profile:', error);
    });
});

function searchProfiles(username) {
    fetch(`/profiles/${username}`)
        .then((response) => response.json())
        .then((profile) => {
        if (profile) {
            // Display the first profile from the response (assuming you want just one)
            console.log("Profile data:", profile);
        } else {
            console.log("No matching profiles found.");
        }
    })
    .catch((error) => {
        console.error('Error fetching profiles:', error);
    });
}

findBtn.addEventListener("click", function () {
    event.preventDefault();
    const findUsername = findusername.value;
    searchProfiles(findUsername);
});

// function createProfileElement(profile) {
//     const p = document.createElement("p");
//     p.addEventListener("click", () => {
//         fetch(`/profiles/${profile.id}`, {
//             method: "DELETE",
//         }).then(() => {
//             p.remove();
//         });
//     });
//     p.innerText = profile.submit;
//     return p;
// }



// Function to retrieve profiles
// function getProfile() {
//     fetch("/profiles")
//         .then((response) => response.json())
//         .then((profiles) => {
//             if (profiles.length === 0) {
//                 console.log("No profiles found.");
//             } else {
//                 profiles.forEach((profile) => {
//                     console.log("All profiles", profile)
//                 });
//             }
//         })
//         .catch((error) => {
//             console.error('Error fetching profiles:', error);
//         });
// }

// // Load profiles on page load
// getProfile();
