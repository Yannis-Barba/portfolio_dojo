export default function requestContact(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;
    console.log(email, message);
    res.status(200).send("Message received");
  } else if (req.method === "GET") {
    res.status(405).send("You can't");
  }
}
