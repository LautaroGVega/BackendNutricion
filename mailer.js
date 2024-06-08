const nodemailer = require('nodemailer');

// Configuración del transportador de correo usando nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: proces.env.MAIL_USER,
        pass: proces.env.MAIL_PAS 
    }
});

// Función para enviar una notificación por correo electrónico con datos CSV adjuntos
const sendNotification = (subject, text, csvData) => {
    const mailOptions = {
        from: 'tumail@gmail.com',
        to: 'a-quien@gmail.com',
        subject: subject,
        text: text,
        attachments: [
            {
                filename: 'survey_responses.csv',
                content: csvData
            }
        ]
    };

    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
        } else {
            console.log('Correo enviado:', info.response);
        }
    });
};

module.exports = sendNotification;
