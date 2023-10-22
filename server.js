import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { PORT, DATABASE_URL } = process.env;

const client = new pg.Client({
    connectionString: DATABASE_URL,
});

await client.connect();

const app = express();

app.use(express.static("public"));
app.use(express.json());

//Query for all rows
app.get("/profiles", (req, res) => {
    client.query("SELECT * FROM profiles").then((result) => {
        res.json(result.rows);
    })
});
//Query by id
// app.get("/profiles/:id", (req, res) => {
//     const id = Number.parseInt(req.params.id);
//     client
//     .query(`SELECT first_name, last_name, veteran, branch_id, song_id FROM profiles WHERE id = $1`, [id])
//     .then((data) => {
//         if (data.rows.length == 0){
//             res.sendStatus(404);
//         }
//         res.json(data.rows[0]);
//     }).catch((err) => {
//         console.error(err);
//         res.sendStatus(500);
//     })
// })
//Query by first and last name

app.get("/profiles/:username", (req, res) => {
    const username = req.params.username;
    client
    .query(
        "SELECT username, first_name, last_name, veteran, branch_id, song_id FROM profiles WHERE username = $1",
        [username]
    )
    .then((data) => {
        if (data.rows.length === 0) {
            res.sendStatus(404);
        }
        res.json(data.rows[0]);
    })
    .catch((err) => {
        console.error(err);
        res.sendStatus(500);
    });
});




app.post("/profiles", (req, res) => {
    const {username, first_name, last_name, song_id, veteran, branch_id } = req.body;

    client.query(
        `INSERT INTO profiles(username, first_name, last_name, veteran, branch_id, song_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
     [username, first_name, last_name, veteran, branch_id, song_id ]
     )
    .then(result => {
        res.json(result.rows[0]);
    })
    .catch((error) => {
        console.error("Error creating profile:", error);
        res.status(500).json({error: "Internal server error"});
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})



// postgres://my_postgres_zw51_user:4EF0xJCMIdiYNLol1Zv7UzdT0Wo28bvn@dpg-cko47g9rfc9c73egr00g-a.ohio-postgres.render.com/my_postgres_zw51?ssl=true
// PORT = 3001