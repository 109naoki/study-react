import { Main } from "../components/Main";
import Head from "next/head";

import { Footer } from "../components/Footer";

import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Main page="about" />
      <Footer />
    </div>
  );
}
