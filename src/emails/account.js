const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const createEmailMsg = (email, text, subject) => {
    const msg = {
        to: email,
        from: 'ak98099@gmail.com',
        subject,
        text
    }

    return msg
}

const sendWelcomeEmail = (email, name) => {

    const subject = 'Welcome to our app.'
    const text = 'Welcome ' + name + ' .Hope you will like our app.'
    sgMail.send(createEmailMsg(email, text, subject))
}

const sendCancelationEmail = (email, name) => {
    const subject = 'Feedback for cancelation.'
    const text = 'Hello ' + name + ' .Can you spent a moment to write a feedback on why are you deleting our app.'
    sgMail.send(createEmailMsg(email, text, subject))
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}