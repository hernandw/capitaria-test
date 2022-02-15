const express = require('express');
const router = express.Router();


router.get('/calendar', (req, res)=>{
    res.render('calendar.ejs');
})

module.exports = router