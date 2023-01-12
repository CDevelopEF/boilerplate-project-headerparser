
const app = require('express');
const system = require('node:os')
const net    = require('node:net');
const router = app.Router();

router.get('/whoami', (req, res)=>{
    return res.json({
        ipaddress: req.ip ,
        lenguage: req.rawHeaders[req.rawHeaders.indexOf('Accept-Language')+1],
        host: req.rawHeaders[req.rawHeaders.indexOf('User-Agent')+1],
    

    });
})

module.exports = router;
