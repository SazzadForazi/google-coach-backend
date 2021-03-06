const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json())
// user: myQuiz
// pass: z1yBo8Gt7oLBZZJT


const uri = "mongodb+srv://myQuiz:z1yBo8Gt7oLBZZJT@cluster0.qimng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect();
        const database = client.db("QuestionBank");
        const usersCollection = database.collection("quiz");
        // create a document to insert

        // const doc = {
        //     question: "What election year did president Trump lose to Biden?",
        //     choices: [2020, 2014],
        //     answer: "2020"
        // }
        // const result = await usersCollection.insertOne(doc);
        // console.log(`A document was inserted with the _id: ${result.insertedId}`);


        //Post API
        app.post('/quiz', async (req, res) => {
            console.log('hitting the post', req.body);
            res.send('hit the post');
        })
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("connected")
});
app.listen(port, () => {
    console.log("Running Server on Port", port);
});