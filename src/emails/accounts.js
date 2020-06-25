const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
      to: email,
      from: 'ivanspj2@gmail.com',
      subject: 'Thank you for choosing to join. ',
      text: `Welcome to  the app, ${name}. Let me know how you get along `
    })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ivanspj2@gmail.com',
    subject: 'Account deactivated',
    text: `Sorry to see you leave, ${name}. Please, you can share with us why you are leaving.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}