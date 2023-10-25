This repo allows a user to create a profile that takes in their username, first name, last name, veteran status, which service branch they served in if they are a veteran, and which song they look like to assign to their profile.

Once the profile is created, the container to create a profile disappears and the user's name, a new background, an image of their branch insignia if the user is a veteran, and a music button are displayed on the page.

The user can create multiple profiles and search by username for each one.  They can switch between profiles superfluously to have different backgrounds and names displayed, as well as different songs to be played from the play button.

Each song was made from the Band.js library, a library that incorporates pitches, rhythms, and instruments to create music/sounds. The songs available are Batman Theme, Superman Theme, Final Countdown, Jump, Hawaii Five-O Theme, Mario Theme (with underwater theme too), and Spanish Flea.

Each Song is assigned to it's own Javascript file and is imported to the app.js file.

Usernames cannot be repeated in the database and the user cannot submit a blank username, it must have at least one character.

In the future, I would like to incorporate more backgrounds, like a batman logo, picture of Honolulu for Hawaii Five-O, a picture of Airborne Paratroopers, and more songs for the user to choose from.