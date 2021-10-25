const { isEmpty } = require('lodash');

module.exports = {

    ValidEmail({ to, template, name }) {
        const fields = [to, template, name];

        const isValidRequiredFields = checkRequiredFields(fields);

        if (!isValidRequiredFields.success) return {
            message: `The field ${isValidRequiredFields.field} is required and was not sent`,
            success: false
        }

        const notEmptyFields = checkEmptyFields(fields);

        if (!notEmptyFields.success) return {
            message: `The field ${isValidRequiredFields.field} is null or empty`,
            success: false
        }

        return {
            success: true
        }
    }


}

function checkEmptyFields(fields) {
    for (const field of fields) {
        const isEmptyField = isEmpty(field);
        if (isEmptyField) return {
            success: false,
            field
        };

        return { success: true };
    }
}

function checkRequiredFields(fields) {
    const requiredFields = ['to', 'template'];
    for (const field of requiredFields) {
        if (!fields[field]) {
            return {
                success: true
            }
        }
    }
}