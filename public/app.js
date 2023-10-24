import playMario from "./songs/mario.js"
import playSuperman from "./songs/superman.js"
import playJump from "./songs/jump.js"
import playBatman from "./songs/batman.js"
import playHawaii from "./songs/hawaii5o.js"
import playFinalCountDown from "./songs/finalcountdown.js"

const playBatmanButton = document.getElementById("playBatmanButton");
const playFinalCountDownButton = document.getElementById("playFinalCountDownButton");
const playHawaiiButton = document.getElementById("playHawaiiButton");
const playJumpButton = document.getElementById("playJumpButton");
const playMarioButton = document.getElementById("playMarioButton");
const playSupermanButton = document.getElementById("playSupermanButton");

const errorMessage = document.getElementById("errorMessage")
const findBtn = document.getElementById("findBtn");
const profileContainer = document.querySelector(".profileContainer");
const createProfileContainer = document.querySelector(".createProfile")
const createProfileForm = document.querySelector(".createProfile-form");
const profileLookup = document.querySelector('.profileLookup');
const profileLookupForm = document.querySelector(".profileLookup-form");

function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function renderProfile(profile) {
    profileContainer.innerHTML = `${profile.first_name} ${profile.last_name}`;
    addImage(profile.branch_id);
    addSong(profile.song_id);
    isVeteran(profile.veteran);
    profileContainer.style.display = 'flex';
    createProfileContainer.style.display = 'none';
}

createProfileForm.addEventListener("submit", createProfile);

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
    const username = formData.get('uname');

    if (!username) {
        console.log('Please enter a username');
        displayError('Please enter a username');
        return;
    }

    // The username is valid and doesn't exist, clear error message
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
    // Proceed with creating the profile
    const newProfile = {
        username: username,
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


function searchProfiles(username) {
    if (!username) {
        displayError('Please enter a username');
        return;
    }

    fetch(`/profiles/${username}`)
        .then((response) => response.json())
        .then((profile) => {
        if (profile) {
            // Display the first profile from the response (assuming you want just one)
            console.log("Profile data:", profile);
            profileContainer.innerHTML = '';
            errorMessage.innerHTML = '';
            createProfileContainer.style.display = 'none';
            renderProfile(profile);


        } else {
            displayError("No matching profiles found");
            console.log('Profile does not exist')
        return; 
        }
    })
    .catch((error) => {
        console.error('Error fetching profiles:', error);
        displayError('Profile does not exist');
    });
}

profileLookupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const findUsername = findusername.value;
    searchProfiles(findUsername);
    profileContainer.innerHTML = '';
});

function isVeteran(veteranId) {
    if (veteranId === true) {
        document.body.style.backgroundImage = 'url(https://m.media-amazon.com/images/I/61rogOlUSfL.jpg)'
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
    } else {
        document.body.style.backgroundImage = 'url(https://www.themarysue.com/wp-content/uploads/2014/07/superman-logo-wallpaper-blue-65884.jpg)'
        document.body.style.backgroundPosition = '8px 152px';
        document.body.style.backgroundPosition = 'auto';
        document.body.style.backgroundAttachment = 'scroll';
    }
}

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
        profileContainer.appendChild(playBatmanButton);
    } else if (songId === 2) {
        profileContainer.appendChild(playFinalCountDownButton);
    } else if (songId === 3) {
        profileContainer.appendChild(playHawaiiButton);
    } else if (songId === 4) {
        profileContainer.appendChild(playJumpButton);
    } else if (songId === 5) {
        profileContainer.appendChild(playMarioButton);
    } else if (songId === 6) {
        profileContainer.appendChild(playSupermanButton);
    }
}

playBatmanButton.addEventListener('click', function() {
    playBatman();
})
playFinalCountDownButton.addEventListener('click', function() {
    playFinalCountDown();
})
playHawaiiButton.addEventListener('click', function() {
    playHawaii();
})
playJumpButton.addEventListener('click', function() {
    playJump();
})
playMarioButton.addEventListener('click', function() {
    playMario();
})
playSupermanButton.addEventListener('click', function() {
    playSuperman();
})

