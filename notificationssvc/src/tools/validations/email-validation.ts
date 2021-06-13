export default function makeEmailValidation({check}) {
    return [
        check('subject', 'Subject is empty!').not().isEmpty(),
        check('emailAddress', 'Email address is empty!').not().isEmpty().isEmail(),
        check('plainTextMessage').not().isEmpty(),
        check('htmlMessage').not().isEmpty()
    ]
}
