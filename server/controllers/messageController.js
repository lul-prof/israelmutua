import nodemailer from 'nodemailer'


const sendMessage=async(req,res)=>{
    try {
        const { email, name,subject, message } = req.body;

        const transporter = nodemailer.createTransport({
        secure: true,
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD
        },
        });


        let mailOptions = {
        from: email,
        to: process.env.GMAIL_EMAIL,
        subject: `${subject} from ${name}`,
        html:
            `<b>${message}</b>
            <div style="width:100%;background-color:grey;padding:10px">
            <h3>This is a test email for your website.</h3>
            <p>From ${email} </p>
            </div>
        `
        };

        transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.json({
            success: false,
            message: error.message
            })
        } else {
            console.log('Email sent:', info.response);
            res.json({
            success: true,
            message: "Email sent",
            info
            });
        }
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
}

export {sendMessage}