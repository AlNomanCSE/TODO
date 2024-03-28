import Card from "@/components/Card";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Card />
        <Card />
      </section>
    </main>
  );
}
