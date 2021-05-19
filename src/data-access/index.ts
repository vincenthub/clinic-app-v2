import mongodb from 'mongodb'
import makeUserDb from './user-db'

const MongoClient = mongodb.MongoClient

const {
    DB_URL,
    DB_NAME,
  } = process.env;

const client = new MongoClient('mongodb://mongodb:27017', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const makeDb = async() => {
    if(!client.isConnected()){
        await client.connect()
    }
    return client.db("clinicUser")
}

const userDb =  makeUserDb({ makeDb })

export { userDb, makeDb }