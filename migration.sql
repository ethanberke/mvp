DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS service_branches;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    song_id INT,
    veteran BOOLEAN,
    branch_id INT
);

-- INSERT INTO users (num) VALUES (1);
-- INSERT INTO users (num) VALUES (2);
-- INSERT INTO users (num) VALUES (3);
-- INSERT INTO users (num) VALUES (4);
-- INSERT INTO users (num) VALUES (5);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE service_branches (
    id SERIAL PRIMARY KEY,
    name TEXT,
    imgurl TEXT
);