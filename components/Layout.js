import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/layout.module.css";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.body}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
