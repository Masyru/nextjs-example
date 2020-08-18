import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';
import React from "react";

export default function FirstPost() {
    return(
        <main className={styles.main}>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className={styles.title}>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </main>
    )
}
