// Go to mongodb website
// create a free MO cluster
// Create a user
// get the connection string
// Install mongodb compass

const url = "mongodb+srv://nilanknikhilh:@nodejsh.ynwav.mongodb.net/?retryWrites=true&w=majority&appName=NodeJsH"

const {MongoClient, ObjectId} = require("mongodb");
const client = new MongoClient(url)

const dbName = 'HelloWorld'


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
  
    // the following code examples can be pasted here...
    // Read
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    

    // Inserting
    // const data = {
    //     "first_name":"Harshita",
    //     "last_name":"Annadanapu",
    //     "city":"Vizag"
    // }
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);


    const updateResult = await collection.updateOne({ _id: new ObjectId('673e58dc96fbd9c8c7c58727') }, { $set: { first_name: "Harshitaa" } });
    console.log('Updated documents =>', updateResult);

    return 'done.';
  }
  
main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());