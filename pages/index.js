import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Menu from "../components/Menu";
import { useState } from "react";


export default function Home() {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = (e) => {
    e.preventDefault();
    console.log("clicked");
    setMenuState(!menuState);
    console.log("state", menuState);
  }
  return (
    <div className={styles.container} id="home">
      <Head>
        <title>Melissa Kepler</title>
        <meta name="description" content="The website of Melissa Kepler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header onClick={(e) => toggleMenu(e)} />
      {menuState ? <Menu onClick={(e) => toggleMenu(e)} /> : ""}
      <main className={styles.main}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
