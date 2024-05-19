import emailHTML from "../assets/email-html"

const sgMail = require("@sendgrid/mail")

export default async function handler(req, res) {
  if (req.method === `POST`) {
    const { email, messageBody } = JSON.parse(req.body)

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    console.log(email)

    const msg = {
      to: email,
      from: "talenttapinterviews@gmail.com",
      subject: "Your TalentTap Meeting Summary",
      html: emailHTML(messageBody), 
    }

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent successfully!")
        res.status(200).send("OK!")
      })
      .catch(error => {
        console.error(error)
        res.status(500).send(error)
      })
  }

  return
}