import { FC, useContext } from "react";
import Link from "next/link";
import { Search } from "@/components";
import AuthContext from "@/contexts/AuthContext";
import styles from "@/styles/Header.module.css";

type HeaderProps = {};

export const Header: FC<HeaderProps> = ({}) => {
  const { user, logout } = useContext(AuthContext);
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
          {user ? (
            <>
              <li>
                <Link href="/events/add">
                  <a>Add Event</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button className="btn-secondary" onClick={() => logout()}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary">Login</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
