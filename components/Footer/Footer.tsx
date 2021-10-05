import Link from "next/link";
import { FC } from "react";
import styles from "../../styles/Footer.module.css";

type FooterProps = {};

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <p>Copyright DJ Events 2021</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  );
};
