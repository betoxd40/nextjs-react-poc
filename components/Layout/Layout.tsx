import Head from "next/head";
import styles from "../../styles/Layout.module.css";
import { FC } from "react";

type LayoutProps = {
  title: string;
  description?: string;
  keywords?: string;
};

export const Layout: FC<LayoutProps> = ({
  title,
  keywords = "music, dj, edm, events",
  description = "Find the latest DJ and other musical events",
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
