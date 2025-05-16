const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // o cualquier otro servicio de correo
    auth: {
        user: 'tu_correo@gmail.com',
        pass: 'tu_contraseña'
    }
});

const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: 'contact@owleafstudio.com',
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${req.body.name}\nCorreo electrónico: ${req.body.email}\nAsunto: ${req.body.subject}\nMensaje: ${req.body.message}`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});