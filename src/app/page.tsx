import Image from "next/image";
import styles from "./page.module.css";
import { Review } from "@/components/Review/Review";

export default function Home() {
  return (
    <main className={styles.main}>
      <Review rating={5} reviewTitle={"test"} reviewText={"test"} customerName={"test"}></Review>
    </main>
  );
}
