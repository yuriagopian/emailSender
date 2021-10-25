module.exports = ({ to, name, template }) => {
    const from = process.env.FROM_EMAIL;

    const setupTemplate = {
        "contracacao": {
            subject: 'Você foi contratado',
            html: `<p> Parabéns ${name} você foi contratado, passe no rh segunda feira </p>`,
        },
        "welcome": {
            subject: 'Bem vindo a nossa empresa',
            html: `<p> Olá ${name} seja muito bem vindo a nossa empresa </p>`,
        },
        "aniversario": {
            subject: 'Parabéns',
            html: `<p> Olá <b>${name}</b> , hoje é seu aniversario </p>`
        }
    }

    const message = setupTemplate[template];
    if(!message) throw Error(`Template ${template} was not found!`);
    message.to = to;
    message.from = from;

    return message;
};


