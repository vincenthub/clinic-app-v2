const express = require('express')
const router = express.Router()

router.get('/:action', function(req, res, next) {
    const action = req.params.action

    if (action === 'send') {
        res.json({
            confirmation: 'success',
            message: 'It worked!!!'
        })
    }
})

module.exports = router
