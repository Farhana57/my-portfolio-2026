const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ১. ইমেইল পাঠানোর কনফিগারেশন (আপনার .env ফাইল থেকে তথ্য নিবে)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// ২. হোম রুট (ব্রাউজারে localhost:3000 চেক করার জন্য)
app.get('/', (req, res) => {
    res.send('Server is running perfectly! 🚀');
});

// ৩. কন্টাক্ট ফর্ম ডাটা পাঠানোর রুট
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // আপনার নিজের ইমেইলে মেসেজ যাবে
        subject: `New Portfolio Message from ${name}`,
        text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error details:", error);
            return res.status(500).json({ success: false, message: 'Mail not sent!' });
        }
        console.log('Success! Email sent: ' + info.response);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    });
});

// ৪. সার্ভার পোর্ট লিসেনিং
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server started on http://localhost:${PORT}`);
});