const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Number: ${body.number}\r\n
    Message: ${body.message}
  `;

  await mail.send({
    to: 'johnfurlong24@gmail.com',
    from: 'hello@johnfurlong.io',
    subject: 'Personal Site: New Message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });
}
export default SendMail