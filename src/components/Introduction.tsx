import styles from "./index.module.css";

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.navbar}>
        <span>Home</span>
        <span>About Us</span>
        <span>Contact</span>
      </div>
      <h1>
        Claim You Vehicle <br />
        <span>Quickly</span>
      </h1>
    </div>
  );
}
