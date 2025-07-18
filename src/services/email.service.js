// services/email.service.js
const transporter         = require('../config/mailer');        // your Nodemailer/SMTP

/**
 * Send via SMTP (nodemailer)
 */
async function sendSMTPEmail(to, subject, html) {
  return transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to,
    subject,
    html,
  });
}


/**
 * Unified send function.
 * Pass an options object { via: 'smtp' | 'api', to, subject, html }
 */
async function sendEmail({ via , to, subject, html }) {
  if (via === 'smtp') {
    return sendSMTPEmail(to, subject, html);
  } 
}

module.exports = { sendEmail };
