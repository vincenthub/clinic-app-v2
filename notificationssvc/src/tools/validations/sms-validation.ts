export default function makeSMSValidation( { check }) {
    return [
        check('contactNumber', 'contact_number_format_invalid').matches(/^639[0-9]{9}$/),
        check('message', 'message_is_empty').not().isEmpty(),
        // todo: check if not-empty and timestamp format
        check('sendOn', 'sendon_timestamp_invalid').not().isEmpty()
    ]
}
