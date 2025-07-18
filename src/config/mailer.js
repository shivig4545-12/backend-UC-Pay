// config/mail.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,                  // e.g. smtp-relay.brevo.com
  port: parseInt(process.env.SMTP_PORT, 10),    // e.g. 587
  secure: false,                                // use STARTTLS
  auth: {
    user: process.env.SMTP_USER,                // your Brevo login
    pass: process.env.SMTP_KEY,                 // your Brevo SMTP key
  },
  tls: {
    rejectUnauthorized: false,                  // dev only: ignore cert errors
  },
});

module.exports = transporter;
