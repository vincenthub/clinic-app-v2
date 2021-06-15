export default function makeSMSValidation( { check }) {
    return [
        check('contactNumber', 'contact_number_format_invalid').matches(/^\+(639[0-9]{9})|(65[8|9][0-9]{7})$/),
        check('message', 'message_is_empty_or_contains_invalid_charset_or_too_long').isLength({ min: 1, max: 140 })
    ]
}
