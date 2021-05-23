import mongodb from 'mongodb'
import makeUserDb from './user-db'

const MongoClient = mongodb.MongoClient

const {
    DB_URL,
    DB_NAME,
  } = process.env;

const client = new MongoClient(DB_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const makeDb = async() => {
    if(!client.isConnected()){
        await client.connect()
    }
    return client.db(DB_NAME)
}

const userDb =  makeUserDb({ makeDb })

export { userDb, makeDb }