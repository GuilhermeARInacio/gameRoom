const router = require('express').Router()

router.get('/', (req, res) => {
    console.log('entrei')
    res.status(200)
    res.send(JSON.stringify('OK'))
    console.log('entrei')
})

module.exports = router