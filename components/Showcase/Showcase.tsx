import Link from "next/link";
import { FC } from "react";
import styles from "@/styles/Showcase.module.css";

type ShowcaseProps = {};

export const Showcase: FC<ShowcaseProps> = () => {
  return (
    <div className={styles.showcase}>
      <h1>Welcome to the Party!</h1>
      <h2>Find the hottest DJ Events</h2>
    </div>
  );
};
