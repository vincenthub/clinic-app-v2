import mongodb from 'mongodb'
import makeEmailsDb from './emails-db'
import makeSMSDb from "./sms-db";

const MongoClient = mongodb.MongoClient

const {
    DB_URL,
    DB_NAME,
} = process.env

const client = new MongoClient(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const database = async() => {
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db(DB_NAME)
}

const emailDb = makeEmailsDb({ database })
const smsDb = makeSMSDb({ database })

export { emailDb, smsDb, database }
