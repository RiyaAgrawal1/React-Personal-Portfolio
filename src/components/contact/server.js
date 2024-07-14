const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // Make sure to install and use dotenv

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
  const { username, phoneNumber, email, subject, message } = req.body;

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'riyajagrawal@gmail.com', // Your email from .env
      pass: 'Riya@2002',  // Your email password from .env
    },
  });

  const mailOptions = {
    from: email, // Sender's email
    to: 'riyajagrawal@gmail.com', // Where you want to receive the emails
    subject: `New Message from ${username}`,
    text: `You have a new message from:
    Name: ${username}
    Phone: ${phoneNumber}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Improved error logging
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message Sent');
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
