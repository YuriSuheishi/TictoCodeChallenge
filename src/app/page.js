import styles from "./page.module.scss";
import Cards from "@/components/cards";
import Table from "@/components/table";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Cards />
        <Table />
      </main>
    </div>
  );
}
