const emailer = require("../../mailer");

export default function requestContact(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;
    console.log(email, message);
    emailer.sendMail(
      {
        from: "egondev.web@gmail.com",
        to: "egondev.web@gmail.com",
        subject: "This is a test email",
        text: message,
        html: `<p> New mail from ${email} : </br> ${message}</p>`,
      },
      (err, info) => {
        if (err) console.error(err);
        else console.log(info);
      }
    );
    res.status(200).send("Message received");
  } else if (req.method === "GET") {
    res.status(405).send("You can't");
  }
}
