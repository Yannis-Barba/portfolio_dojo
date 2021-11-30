import Layout from "../components/Layout";
import Image from "next/image";
import Meme from "../public/images/callMe.jpeg";
import contacts from "../styles/contacts.module.css";
import { useState } from "react";
import axios from "axios";

export default function About() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Layout pageTitle="Contact">
      <div>
        <Image alt="CallMe" src={Meme} layout="responsive" />
        <h2>Contactez-moi !</h2>
        <form
          className={contacts.form}
          onSubmit={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:3000/api/contact", {
                email,
                message,
              })
              .then((result) => {
                if (result.status === 200) {
                  alert("Merci, vous serez recontacté d'ici peu");
                }
                setEmail("");
                setMessage("");
              });
          }}
        >
          <label htmlFor="email" className={contacts.label}>
            Email{" "}
            <input
              type="email"
              id="email"
              placeholder="Votre mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            ></input>
          </label>

          <label htmlFor="message" className={contacts.label}>
            Message 📩
            <textarea
              id="message"
              rows="5"
              cols="26"
              placeholder="Votre message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            ></textarea>
          </label>
          <button type="submit"> Envoyer </button>
        </form>
      </div>
    </Layout>
  );
}
