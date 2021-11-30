import Layout from "../components/Layout";
import Image from "next/image";
import myImg from "../public/images/yannis_barba.jpg";

export default function About() {
  return (
    <Layout pageTitle={"About Us"}>
      About me
      <Image alt="lyon" src={myImg} layout="responsive" />
      <p> Recrutez moi SVP, je suis intelligent et beau </p>
    </Layout>
  );
}
