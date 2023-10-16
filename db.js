const { MongoClient } = require('mongodb');
const mongoString = "mongodb+srv://admin:w7ArSUVAh2HXjM6R@cluster0.qtyrl5o.mongodb.net/?retryWrites=true&w=majority";

async function main() {
    //stworz nowe połaczenie do bazy danych pod nazwa client używając sterownika MongoClient (alias do mongodb)
    //i danych do połaczenia wygenerowanych z atlasa
    const client = new MongoClient(mongoString);

    try {
        //to spróbuje się zrobić
        //uwaga - otwieram połączenie - to może potrwać więc dajemy await
        await client.connect();
        //pokaż listę baz danych
        //      await listDB(client);

        await getOneByName(client, "Ocean View");

    } catch (e) {
        //jeśli się wywali na twarz - wyświetl szczegóły w konsoli
        console.error(e)
    } finally {
        //tak czy owak na koniec się zrobi
        //zamykamy połaczenie
        await client.close();
    }
}


//ściągnij listę baz danych i wyświetl w konsoli 
//jako parametr przyjmuje połaczenie do bazy
async function listDB(client) {
    let list = await client.db().admin().listDatabases();
    //pokaż w konsoli nagłowek listy
    console.log("Lista baz danych na serwerze:");
    //dla każdej bazy danych na liście...
    list.databases.forEach(database => {
        //wyświetl napis Baza: i doklej nazwę bazy danych
        console.log("Baza: " + database.name);
    });
}


async function connect() {
    const client = new MongoClient(mongoString);
    try {
        await client.connect();
        return 
    } catch (e) {
        console.error(e);
    }
}


async function getOneByName(client, name) {
    const result = await client.db("sample_airbnb").collection("ListeningsAndReviews").findOne(
        {
            name: "Horto flat with small garden"
        }
    );
    if(result) {
        console.log("znaleziono pasujący rekord:");
        console.log(result);
    } else {
        console.log("nie znaleziono pasującego rekordu:");
    }
}

module 


//uruchom funkcje main - jeśli coś pójdzie nie tak to wyrzuc bład na konsole
main().catch(console.error);