import Image from "next/image";
import styles from "./page.module.css";
import Item from "./components/Item";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.flexContainer}>
        <Item />
        <Item />
        <Item />
      </div>

      <div className={styles.flexContainer2}>
        <Item />
        <Item />
        <Item />
      </div>
    </main>
  );
}
