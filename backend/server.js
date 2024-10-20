const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config(); // For environment variables

// Express setup
const app = express();
app.use(bodyParser.json());

// Multer storage and file handling for file uploads
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname)); // Save with unique file name
  }
});

const upload = multer({ storage: storage });

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_PASS // Your Gmail app password
  }
});

app.post('/api/contact', upload.single('file'), async (req, res) => {
  console.log('Form submission received');
  console.log('Request body:', req.body);
  console.log('Uploaded file:', req.file);

  const { name, companyName, email, phoneNumber, projectDetails } = req.body;
  const file = req.file ? req.file.filename : null;

  try {
    // Send email notification
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Company: ${companyName}
        Email: ${email}
        Phone: ${phoneNumber}
        Project Details: ${projectDetails}
      `,
      attachments: file
        ? [
            {
              filename: req.file.originalname,
              path: path.join(__dirname, 'uploads', file),
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to submit the form.' });
  }
});

// Serve static files (for uploaded files)
app.use('/uploads', express.static('uploads'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
