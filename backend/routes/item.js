const express = require('express');
const router = express.Router();
const Item = require('../db/item');
const uuid = require('uuid/v1')
const crypto = require('crypto');
const generatePassword = require('password-generator');
require('url-search-params-polyfill');
const cron = require('node-cron');


function validateItem(item) {
    const validItem = typeof item.text === 'string';
    return validItem;
}


//crypto function
function encrypt(key, data) {
    let cipher = crypto.createCipher('aes-256-cbc', key);
    let crypted = cipher.update(data, 'utf-8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
function decrypt(key, data) {
    let decipher = crypto.createDecipher('aes-256-cbc', key);
    let decrypted = decipher.update(data, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

router.post('/save/item', async (req, res) => {
    //generate crypt pwd
    let pawd = generatePassword(12, false, /\d/, 'note-');
    let item = {
        //crypt data with pwd
        text: encrypt(pawd, req.body.text),
        pwd: pawd,
    }
    let uid = uuid();
    //if valid 
    if (validateItem(item)) {
        try {
            //save item
            await Item.saveItem(item, uid);
            //respone true and open url 
            res.json({
                msg: true,
                url: uid,
                pwd: pawd
            })
        } catch (e) {
            res.json({ msg: 'invalid request' });
        }
    } else {
        res.json({ msg: 'validate error' });
    }


})

var task = cron.schedule('* * * * *', async () =>  {
    Item.delItem(param.get('/api/get/crypto/item/url'));
  }, {
    scheduled: false
});

router.get('/get/crypto/item/:url', async (req, res) => {
    
    let param =  new URLSearchParams(req.originalUrl);
    let item = {
        url: param.get('/api/get/crypto/item/url'),
        pwd: param.get('pwd'),
    }
    try {
        const result = await Item.getItem(item);
        res.json({ msg: decrypt(item.pwd, result) });
        await Item.delItem(param.get('/api/get/crypto/item/url'))
    } catch (error) {
        res.json({msg: false});
    }
})
module.exports = router;