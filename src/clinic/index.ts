import crypto from 'crypto'
import Id from '../Id'
import buidlMakeCreateUser from './user'

const makeCreateNewUser = buidlMakeCreateUser({ Id, md5 }) 

export { 
    makeCreateNewUser 
}

function md5 (text) {
    return crypto
        .createHash('md5')
        .update(text, 'utf-8')
        .digest('hex')
}