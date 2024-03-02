import AuthButton from "./AuthButtons";
import styles from "./index.module.css";

export default function Signup() {
  return (
    <div className={styles.signup}>
      <div className={styles.authBar}>
        <AuthButton type="Login" />
        <AuthButton type="Sign Up" />
      </div>
    </div>
  );
}
