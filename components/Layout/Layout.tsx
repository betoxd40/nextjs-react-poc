import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header, Footer, Showcase } from "../";
import styles from "@/styles/Layout.module.css";

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
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};
