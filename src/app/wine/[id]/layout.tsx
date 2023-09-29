import styles from "./page.module.css";

export default function RootLayout({
  cellar,
  wine,
  similarWines,
}: {
  cellar: React.ReactNode;
  wine: React.ReactNode;
  similarWines: React.ReactNode;
}) {
  return (
    <div className={styles.main}>
      <div className={styles.topSection}>
        <div className={styles.wine}>
        {wine}
        </div>
        <div className={styles.cellar}>
        {cellar}
        </div>
      </div>
      <div className={styles.bottomSection}>
        {similarWines}
        </div>
    </div>
  );
}
