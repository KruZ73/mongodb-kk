//importuj bibliotekę express
const express = require("express");
//przygotuj instancję expressa do użycia
const app = express();
//określ port na którym będzie działał express
const port = 8000;
//zaimportuj nasz własny moduł do obsługi bazy danych
const db = require("./db");

app.get("/", async function (req, res) {
    //stwórz połączenie
    const connection = await db.connect();
    //wyślij zapytanie
    const result = await db.getOneByName(connection, "Ocean View Waikiki Marina w/prkg");
    //wyrzuć otrzymanego jsona do przeglądarki
    res.json(result);
    db.close(connection);
})


//uruchom wcześniej skonfigurowanego expressa
app.listen(port, function () {
    console.log("Express działa na porcie "+port);
});