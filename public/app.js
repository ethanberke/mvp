import playMario from "./songs/mario.js"
import playSuperman from "./songs/superman.js"
import playJump from "./songs/jump.js"
import playBatman from "./songs/batman.js"
import playHawaii from "./songs/hawaii5o.js"
import playFinalCountDown from "./songs/finalcountdown.js"

const findBtn = document.getElementById("findBtn");
const profileContainer = document.querySelector(".profileContainer");
const createProfileForm = document.querySelector(".createProfile-form");

function createProfile(event) {
    event.preventDefault();

    const createProfileForm = event.target;

    const formData = new FormData(createProfileForm);
    const songName = formData.get('themesong');
    const branchName = formData.get('branch-name');
    const veteranInput = formData.get('ans') === 'yes' ? true : false;
    const branchIdMap = {
        'Army': 1,
        'MarineCorps': 2,
        'Navy': 3,
        'AirForce': 4,
        'SpaceForce': 5,
        'CoastGuard': 6
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
        console.log(`New profile data saved: ${JSON.stringify(createdProfile)}`);
        renderProfile(createdProfile);
    })
    .catch((error) => {
        console.error('Error creating profile:', error);
    });
}

function renderProfile(profile) {
    createProfileForm.innerHTML = '';
    profileContainer.innerHTML = '';
    profileContainer.innerHTML = `${profile.first_name} ${profile.last_name}`;
    addImage(profile.branch_id);
    createPlayButton(profile.song_id);
}


createProfileForm.addEventListener("submit", createProfile);




function searchProfiles(username) {
    fetch(`/profiles/${username}`)
        .then((response) => response.json())
        .then((profile) => {
        if (profile) {
            // Display the first profile from the response (assuming you want just one)
            console.log("Profile data:", profile);
            renderProfile(profile);
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
    createProfileForm.innerHTML = '';
    profileContainer.innerHTML = '';
});


//function to generate image based on profile branch.id
function addImage(branchId) {
    const image = document.createElement('img');

    if (branchId === 1) {
        image.src = 'https://www.defense.gov/portals/1/Page-Assets/branding-guide/armed-forces/sealArmy.png';
    } else if (branchId === 2) {
        image.src = 'https://www.defense.gov/portals/1/Page-Assets/branding-guide/armed-forces/sealMarineCorps.png';
    } else if (branchId === 3) {
        image.src = 'https://www.defense.gov/portals/1/Page-Assets/branding-guide/armed-forces/sealNavy.png';
    } else if (branchId === 4) {
        image.src = 'https://www.defense.gov/portals/1/Page-Assets/branding-guide/armed-forces/sealAirForce.png';
    } else if (branchId === 5) {
        image.src = 'https://www.defense.gov/portals/1/Page-Assets/branding-guide/armed-forces/SealSpaceForce.png';
    } else if (branchId === 6) {
        image.src = 'https://www.defense.gov/portals/1/Page-Assets/branding-guide/armed-forces/sealCoastGuard.png';
    }
    profileContainer.appendChild(image);
}

//function to assign songs
function addSong(songId) {
    if (songId === 1) {
        playBatman();
    } else if (songId === 2) {
        playFinalCountDown();
    } else if (songId === 3) {
        playHawaii();
    } else if (songId === 4) {
        playJump();
    } else if (songId === 5) {
        playMario();
    } else if (songId === 6) {
        playSuperman();
    }
}

function createPlayButton(songId) {
    const playButton = document.createElement('button');
    playButton.textContent = 'Play Song';
    profileContainer.appendChild(playButton);

    playButton.addEventListener('click', function() {
        addSong(songId);
    });
}