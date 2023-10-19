DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS service_branches;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name, TEXT NOT NULL,
    song_id INT NOT NULL,
    veteran BOOLEAN NOT NULL,
    branch_id INT
);

INSERT INTO users (first_name, last_name, song_id, veteran, branch_id) VALUES ('John', 'Smith', 1, true, 1);
-- INSERT INTO users (num) VALUES (2);
-- INSERT INTO users (num) VALUES (3);
-- INSERT INTO users (num) VALUES (4);
-- INSERT INTO users (num) VALUES (5);

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