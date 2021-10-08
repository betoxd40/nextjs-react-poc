import { FC } from "react";
import Link from "next/link";
import { Search } from "@/components";
import styles from "@/styles/Header.module.css";

type HeaderProps = {};

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>DJ Events</a>
        </Link>
      </div>

      <Search />

      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
