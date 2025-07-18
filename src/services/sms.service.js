// services/sms.service.js
const twilioClient = require('../config/twilio');

const sendSmsOtp = async (phone, otp) => {
  return twilioClient.messages.create({
    body: `Your OTP code is ${otp}`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phone,
  });
};

module.exports = { sendSmsOtp };
