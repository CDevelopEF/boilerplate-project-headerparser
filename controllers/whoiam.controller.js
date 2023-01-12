
const app = require('express');
const system = require('node:os')
const net    = require('node:net');
const router = app.Router();

router.get('/whoami', (req, res)=>{
    res.json({ipaddress: req.headers["x-forwarded-for"], language: req.headers["accept-language"], software:req.headers["user-agent"] })
})

module.exports = router;
