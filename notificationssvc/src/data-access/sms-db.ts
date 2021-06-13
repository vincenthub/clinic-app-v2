import Id from '../tools/id'

export default function makeSMSDb ( { database } ) {

    return Object.freeze({ insert })

    async function insert( { id: _id = Id.makeId(), ...smsInfo } ) {
        const db = await database()
        const result = await db
            .collection('smsdb')
            .insertOne({ _id, ...smsInfo })
        const { _id: id, ...insertedInfo } = result.ops[0]
        return { id, ...insertedInfo }
    }

}
