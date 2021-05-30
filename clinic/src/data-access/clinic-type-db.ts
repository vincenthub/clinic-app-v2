import Id from '../Id'

export default function makeClinicTypeDb ({ makeDb }) {

    return Object.freeze({
        insertClinicType,
        findClinicTypeByName,
        getAllClinicTypes
    })

    async function insertClinicType ({ ...typeInfo }) {
        const db = await makeDb()
        const result = await db
            .collection('clinictype')
            .insertOne({ ...typeInfo })
        
        const { ...insertedTypeInfo } = result.ops[0]
        return { ...insertedTypeInfo  }
    }

    async function findClinicTypeByName ({ name }) {
        const db = await makeDb()
        const result = await db.collection('clinictype').find({ name })
        const found = await result.toArray()
        if (found.length === 0) {
          return null
        }
        const { ...clinicInfo } = found[0]
        return { ...clinicInfo }
    }

    async function getAllClinicTypes ({}) {
        const db = await makeDb()
        const result = await db.collection('clinictype').find({})
        const found = await result.toArray()
        if (found.length === 0) {
          return null
        }
        return found
    }

}