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

app.get("/users", (req, res) => {
    client.query("SELECT * FROM users").then((result) => {
        res.json(result.rows);
    })
});

app.post("/users", (req, res) => {
    const { num } = req.body;

    client.query("INSERT INTO users(num) VALUES ($1) RETURNING *", [num])
    .then(result => {
        res.json(result.rows[0]);
    });
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})






// postgres://my_postgres_zw51_user:4EF0xJCMIdiYNLol1Zv7UzdT0Wo28bvn@dpg-cko47g9rfc9c73egr00g-a.ohio-postgres.render.com/my_postgres_zw51?ssl=true
// PORT = 3001