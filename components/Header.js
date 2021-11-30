import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a>Accueil</a>
        </Link>
        <Link href="/contact">
          <a>Me contacter</a>
        </Link>
        <Link href="/about">
          <a>Mes réalisations</a>
        </Link>
      </nav>
    </header>
  );
}
