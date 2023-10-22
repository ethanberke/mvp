
DROP TABLE IF EXISTS profiles;
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS service_branches;

CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    veteran BOOLEAN NOT NULL,
    branch_id INT,
    song_id INT NOT NULL
);

INSERT INTO profiles (username, first_name, last_name, veteran, branch_id, song_id) VALUES ('cooldude22', 'John', 'Smith', true, 1, 1);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT
);

INSERT INTO songs (name) VALUES ('Batman'), ('Final Countdown'), ('Hawaii Five-O'), ('Jump'), ('Mario'), ('Superman');

CREATE TABLE service_branches (
    id SERIAL PRIMARY KEY,
    name TEXT,
    imgurl TEXT
);

INSERT INTO service_branches (name, imgurl) VALUES ('Army', 'https://www.defense.gov/portals/1/Page-Assets/branding-guide/armed-forces/sealArmy.png');
INSERT INTO service_branches (name, imgurl) VALUES ('Marine Corps', 'https://www.defense.gov/portals/1/Page-Assets/branding-guide/armed-forces/sealMarineCorps.png');
INSERT INTO service_branches (name, imgurl) VALUES ('Navy', 'https://www.defense.gov/portals/1/Page-Assets/branding-guide/armed-forces/sealNavy.png');
INSERT INTO service_branches (name, imgurl) VALUES ('Air Force', 'https://www.defense.gov/portals/1/Page-Assets/branding-guide/armed-forces/sealAirForce.png');
INSERT INTO service_branches (name, imgurl) VALUES ('Space Force', 'https://www.defense.gov/portals/1/Page-Assets/branding-guide/armed-forces/SealSpaceForce.png');
INSERT INTO service_branches (name, imgurl) VALUES ('Coast Guard', 'https://www.defense.gov/portals/1/Page-Assets/branding-guide/armed-forces/sealCoastGuard.png');