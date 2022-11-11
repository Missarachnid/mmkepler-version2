import Image from "next/image";
import landingLogo from "../public/images/mmk_Logo.svg";
import styles from "../styles/Home.module.css";

export default function Landing(){
  return (
    <section id={styles.landing} name="home">
      <Image src={landingLogo} layout="responsive" alt="Logo for Melissa Kepler, with a small moon orbiting a teal planet in the background" />
    </section>
  )
}