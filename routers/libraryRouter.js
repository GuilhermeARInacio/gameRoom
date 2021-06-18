const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200)
    res.send(JSON.stringify('OK'))
})

module.exports = router