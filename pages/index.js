import styles from "../styles/Home.module.css";
import bestellungAnimation from "../assets/BestellungAnimation.json";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Lottie animationData={bestellungAnimation} loop={true} />
    </div>
  );
}
