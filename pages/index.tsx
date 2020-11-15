import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Template</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.home}>template</div>
        </div>
    );
}
