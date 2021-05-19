import mongodb from 'mongodb'
import makeUserDb from './user-db'

const MongoClient = mongodb.MongoClient
const url = process.env.DB_URL
const dbName = process.env.DB_NAME
const client = new MongoClient(url, { useNewUrlParser: true })

const makeDb = async() => {
    if(!client.isConnected()){
        await client.connect()
    }
    return client.db(dbName)
}

const userDb =  makeUserDb({ makeDb })

export { userDb, makeDb }