import Id from '../tools/Id'

export default function makeClinicsDb ({ makeDb }) {

    return Object.freeze({
        findClinicById,
        findByName,
        insert,
        getAllClinics
    })

    async function findClinicById ({ id: _id }) {
         const db = await makeDb()
         const result = await db.collection('clinic').find({ _id })
         const found = await result.toArray()
         if(found.length === 0){
              return null
         }
         const {_id: id, ...info } = found[0]
         return { id, ...info }
    }

    async function findByName ({ name }) {
        const db = await makeDb()
        const result = await db.collection('clinic').find({ name })
        const found = await result.toArray()
        if (found.length === 0) {
          return null
        }
        const { ...clinicInfo } = found[0]
        return { ...clinicInfo }
    }

    async function insert ({ id: _id = Id.makeId(), ...clinicInfo }) {
        const db = await makeDb()
        const result = await db
            .collection('clinic')
            .insertOne({ _id, ...clinicInfo })
        const { _id: id, ...insertedInfo } = result.ops[0]
        return { id, ...insertedInfo }
    }

    async function getAllClinics ({}) {
        const db = await makeDb()
        const result = await db.collection('clinic').find({})
        const found = await result.toArray()
        if (found.length === 0) {
          return null
        }
        return found
    }
}