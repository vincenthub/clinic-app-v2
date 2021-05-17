const mongodb = require('mongodb')
const makeUserDb = require('./user-db')

const MongoClient = mongodb.MongoClient
const url = process.env.DB_URL
const dbName = process.env.DB_NAME
const client = new MongoClient(url, { useNewUrlParser: true })

export async function makeDb () {
    if(!client.isConnected()){
        await client.connect()
    }
    return client.db(dbName)
}

const clinicDb = Object.freeze({
    userDb: makeUserDb({ makeDb})
}) 

export default clinicDb
