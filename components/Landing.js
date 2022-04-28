import Image from "next/image";
import landingLogo from "../public/images/Melissa_Kepler_Logo.png";
import styles from "../styles/Home.module.css";

export default function Landing(){
  return (
    <div id={styles.landing}>
      <Image src={landingLogo} alt="Logo for Melissa Kepler, with a small moon orbiting a teal planet in the background" />
    </div>
  )
}