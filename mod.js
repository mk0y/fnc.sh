import {
  Bson,
  MongoClient,
} from "https://deno.land/x/mongo@0.28.0/mod.ts";
let cachedDb = null;
const databaseName = 'test'; //process.env.DB_NAME;
const colName = 'fnc'; //process.env.COLLECTION;
const dburi = 'mongodb://nodb:7EB4o55d2Ze6CmxmaJRv6m7WTVpH60BC6LTr7Z8U0XQgIuZKmIqTuyGsvcqNRpv4VnRwt14meAYckOKTwH3XWg==@nodb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@nodb@';

function connectToDatabase() {
    if (cachedDb) {
        return Promise.resolve(cachedDb);
    }

    return MongoClient.connect(
        dburi,
        {   ssl: true  }
    ).then(db => {
        cachedDb = db;
        return cachedDb;
    });
}

function write (collection,_id,value){

    const filter = {_id};

    const updateDoc = {
        $set: {
            _id,
            value
        },
    };

    const options = {"upsert" : true, "fullResult" : true};

    return collection.updateOne(filter, updateDoc, options);
}

exports.handler = async (event) => {
    const client = await connectToDatabase();
    const db = client.db(databaseName);
    const collection = db.collection(colName);

    const doc = (await write(collection, event._id, event.value));
    const response = {
        statusCode: 200,
        body: {
            'region' : 'test',
            'operation' : 'write cosmos db',
            doc
        },
    };
    return response;
};
