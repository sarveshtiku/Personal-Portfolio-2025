const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend('re_NgAQ2RBY_JkfUEDkgAM2Bekn1VxQVyAnc');

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await resend.emails.send({
      from: 'contact@sarveshtiku.com', // Use your verified domain email
      to: 'sarveshtiku@gmail.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `
    });
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email.', error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
