import Id from '../tools/id'

export default function makeEmailsDb ( { database }) {

    return Object.freeze({ insert, findById, updateSentOnTimestamp })

    async function insert( { id: _id = Id.makeId(), ...emailInfo } ) {
        const db = await database()
        const result = await db
            .collection('emailsdb')
            .insertOne({ _id, ...emailInfo })
        const { _id: id, ...insertedInfo } = result.ops[0]
        return { id, ...insertedInfo }
    }

    async function findById({ id: _id }) {
        const db = await database()
        const result = await db.collection('emailsdb').find({ _id })
        const found = await result.toArray()
        if (found.length === 0) {
            return null
        }
        const { _id: id, ...emailInfo } = found[0]
        return { id, ...emailInfo }
    }

    async function updateSentOnTimestamp({ id: _id }) {
        const db = await database()
        const result = await db.collection('emailsdb').updateOne({ _id }, { $set: { sentOn: Date.now(), modifiedOn: Date.now() }})
        return result.modifiedCount > 0 ? { id: _id } : null
    }

}
