const express = require("express");
const app = express();
const port = 8000;
const db = require("./db");

app.get("/", async function (req, res) {

    const connection = await db.connect();
    const result = await db.getOneByName(connection, "Ocean View");
    res.send(result);
})

app.listen(post, function () {
    console.log("Express działa na porcie " +port);
});