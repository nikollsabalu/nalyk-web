import styles from "../styles/Spinner.module.css";
import AnimatedLogo from "./AnimatedLogo";

const Spinner = () => {
  return (
    <div className={styles.contenedor}>
        <AnimatedLogo />
    </div>
  );
};

export default Spinner;
