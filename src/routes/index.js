const express = require('express');
const router = express.Router();

const getHelloController = require('../controllers/sendEmailController');

router.post('/sendEmail',getHelloController.sendEmail);
router.get('/download', async function( req, res) {
    const file = `src/files/certificate.pdf`;
    res.download(file); // Set disposition and send it.
})

module.exports = router;