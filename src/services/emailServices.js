const sgMail = require('@sendgrid/mail')
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const templates = require('../templates/emailTemplates');
const emailValidator = require('../validations/emailValidations');

module.exports = {
    async sendEmail({ to, template, name }) {
        try {   
            
            emailValidator.ValidEmail({to, template, name});   

            const message = templates({ to, template, name });

            const sendEmailReponse = await sgMail.send(message);

            let successMessageResponse = '';
            if (sendEmailReponse.statusCode == 202) {
                successMessageResponse = `Email sent with success!`
            };

            return {
                message: successMessageResponse,
                sendEmailReponse
            };

        } catch (error) {
            throw error
        }
    }
}