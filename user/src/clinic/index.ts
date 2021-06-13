import crypto from 'crypto'
import Id from '../Id'
import buildlMakeCreateUser from './user'

const makeCreateNewUser = buildlMakeCreateUser({ Id, md5 }) 

export { 
    makeCreateNewUser 
}

function md5 (text) {
    return crypto
        .createHash('md5')
        .update(text, 'utf-8')
        .digest('hex')
}