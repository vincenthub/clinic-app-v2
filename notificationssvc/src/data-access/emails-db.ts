import Id from '../tools/Id'

export default function makeEmailsDb ( { database }) {

    return Object.freeze({ insert })

    async function insert( { id: _id = Id.makeId(), ...emailInfo } ) {
        const db = await database()
        const result = await db
            .collection('emailsdb')
            .insertOne({ _id, ...emailInfo })
        const { _id: id, ...insertedInfo } = result.ops[0]
        return { id, ...insertedInfo }
    }

}
