import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Introduction from "@/components/Introduction";
import Signup from "@/components/Signup";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>

      <main className={styles.main}>
        <Introduction />
        <Signup />
      </main>
    </>
  );
}
