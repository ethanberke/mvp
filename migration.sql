DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    num INTEGER
);

INSERT INTO users (num) VALUES (1);
INSERT INTO users (num) VALUES (2);
INSERT INTO users (num) VALUES (3);
INSERT INTO users (num) VALUES (4);
INSERT INTO users (num) VALUES (5);
