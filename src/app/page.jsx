"use client";
import Card from "@/components/Card";
import styles from "./page.module.css";
import { getTopics } from "@/utils/process";
export default async function Home() {
  const topics = await getTopics();
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {topics.map((topic) => (
          <Card key={topic._id} topic={topic} />
        ))}
      </section>
    </main>
  );
}
