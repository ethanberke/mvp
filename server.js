import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { port, DATABASE_URL } = process.env;

const client = new pg.Client({
    connectionString: DATABASE_URL,
})

await client.connect();

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/users", (req, res) => {
    client.query("SELECT * FROM users").then((result) => {
        res.json(result.rows);
    })
});

app.post("/things", (req, res) => {
    const { num } = req.body;

    client.query("INSERT INTO users(num) VALUES (10)", [num].then(result => {
        res.json(result.rows);
    }))
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})





//postgres/localhost/mvp