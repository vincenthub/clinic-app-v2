import Id from '../tools/id'

export default function makeSMSDb ( { database } ) {

    return Object.freeze({ insert, updateSentOnTimestamp, findById })

    async function insert( { id: _id = Id.makeId(), ...smsInfo } ) {
        const db = await database()
        const result = await db
            .collection('smsdb')
            .insertOne({ _id, ...smsInfo })
        const { _id: id, ...insertedInfo } = result.ops[0]
        return { id, ...insertedInfo }
    }

    async function findById({ id: _id }) {
        const db = await database()
        const result = await db.collection('smsdb').find({ _id })
        const found = await result.toArray()
        if (found.length === 0) {
            return null
        }
        const { _id: id, ...smsInfo } = found[0]
        return { id, ...smsInfo }
    }

    async function updateSentOnTimestamp({ id: _id }) {
        const db = await database()
        const result = await db.collection('smsdb').updateOne({ _id }, { $set: { sentOn: Date.now(), modifiedOn: Date.now() }})
        return result.modifiedCount > 0 ? { id: _id } : null
    }

}
