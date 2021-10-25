const sendEmailService = require('../services/emailServices');

module.exports = {
    async sendEmail(req, res) {
        try {
            const { to, template, name } = req.body;
            const sendEmailServiceResponse = await sendEmailService.sendEmail({ to, template, name });

            res.status(200).json(sendEmailServiceResponse);

        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}


