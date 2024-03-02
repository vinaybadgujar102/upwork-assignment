import styles from "./index.module.css";

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.navbar}>
        <span>Home</span>
        <span>About Us</span>
        <span>Contact</span>
      </div>
      <h1 className={styles.heading}>
        Claim Your <span>Vehicle</span> <br />
        Quickly
      </h1>
      <p className={styles.paragraph}>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
    </div>
  );
}
