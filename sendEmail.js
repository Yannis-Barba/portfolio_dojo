const emailer = require("./mailer");

emailer.sendMail(
  {
    from: "e.gon66@outlook.fr",
    to: "egondev.web@gmail.com",
    subject: "This is a test email",
    text: "Bonjour monde",
    html: "<p>Hello <em>world</em></p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);
