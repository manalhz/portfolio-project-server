const express = require('express');
const nodemailer = require('nodemailer');

const questionsRouter = express.Router();

//create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.EMAIL_USERNAME, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
  },
});

questionsRouter.route('/').post(async (req, res, next) => {
  const { email, name, question } = req.body;

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: email, // sender address
      to: 'manalhz@gmail.com', // list of receivers
      subject: 'Question About OC Vacation Home', // Subject line
      text: name + '\n\n' + question, // html body
    });
    res.sendStatus(200);
    // send success back
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = questionsRouter;
