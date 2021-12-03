import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with love by MOI
      <Link href={"/admin/projects"}>ADMIN</Link>
    </footer>
  );
}
