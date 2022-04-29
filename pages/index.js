import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import sectionStyles from "../styles/Section.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Failure from "../components/Failure";
import Success from "../components/Success";
import Menu from "../components/Menu";
import Landing from "../components/Landing";
import { useState } from "react";
import * as emailjs from "emailjs-com";
import planets from "../public/images/planets.png";



export default function Home() {
  const [menuState, setMenuState] = useState(false);
  const initialState = {nameInput: "", emailInput: "", messageInput: ""};
  const [formState, setFormState] = useState(initialState);
  const initialSuccess = {show: false};
  const initialFailure = {show: false};
  const initialShowForm = {show: true};
  let [success, setSuccess] = useState(initialSuccess);
  let [failure, setFailure] = useState(initialFailure);
  let [showForm, setShowForm] = useState(initialShowForm);
  let initialProject = {one: true, two: false, three: false};
  let [showProjects, setProjects] = useState(initialProject);

  //toggle hamburger menu
  const toggleMenu = (e) => {
    e.preventDefault();
    let buttonMenu = document.getElementsByClassName("item");
    console.log("toggle", buttonMenu);
    buttonMenu.ariaExpanded = !menuState;
    setMenuState(!menuState);
  }

  //toggle Projects
  const toggleProjects = (e) => {
    e.preventDefault();
    /*
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let section2 = document.getElementById("section2");
    let section3 = document.getElementById("section3");
    */

    if(showProjects.one && showProjects.two){
      setProjects({...initialProject, three: true});
      //section3.style.visibility = "visible";
      //button2.style.visibility = "hidden";
    } else if(showProjects.one && showProjects.three === false) {
      setProjects({...initialProject, two: true});
      //button1.style.visibility = "hidden";
      //section2.style.visibility = "visible";
    } 
  }
  //handle form change
  const handleChange = (e) => {
    e.preventDefault();
    let {target} = event;
    let {name, value} = target;
    setFormState({...formState, [name]: value});
  }

  //submit contact form
  const submitForm = (event) => {
    event.preventDefault();
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_USER_ID;
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    let formInfo = {from_name: formState.nameInput, from_email: formState.emailInput, message: formState.messageInput, reply_to: formState.emailInput};

    emailjs.send(
      serviceId, templateId, formInfo, userId)
      .then(() => {
        console.log("worked")
        setSuccess({show: true})
        setShowForm({show: false});
        setFormState(initialState);
        })
      .catch(err => {
        console.log("err", err);
        setShowForm({show: false});
        setFailure({show:true})
      });
  }
 
  return (
    <div className={styles.container} id="home">
      <Head>
        <title>Melissa Kepler</title>
        <meta name="description" content="Melissa Kepler | Full Stack React Developer" />
        <meta name="keywords" content="React Developer, Full Stack Developer, Front End Developer, React Full Stack Developer, JavaScript Developer, Melissa Kepler, mmkepler" />
        <meta property="og:title" content="Melissa Kepler | Full Stack React Developer" />
        <meta property="og:image" content="/images/Melissa_Kepler_Logo.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta property="og:site_name" content="Melissa Kepler" />
        <link rel="icon" href="../images/planetTitle.png" />
      </Head>
      <Header onClick={(e) => toggleMenu(e)} />
      {menuState ? <Menu onClick={(e) => toggleMenu(e)} /> : ""}
      <main className={styles.main}>
        <Landing />
        <About />
        <Skills />
        <Projects onClick={(e) => toggleProjects(e)} shown={showProjects}/>
        <div>
         <div className={sectionStyles.holder}>
        <span className={sectionStyles.spanleft}></span><h2 className={sectionStyles.title}>Contact</h2><span className={sectionStyles.spanright}></span>
        </div>
        <div className={sectionStyles.section} 
          id={styles.contact} 
          name="contact">
            <div id={sectionStyles.spacer}>
            { showForm.show && <p>Send a message to my planet!</p>}
            </div>
            <Image src={planets} alt="image of a teal planet with 3 orbiting moons." />
          <div>
            {success.show && <Success />}
            {failure.show && <Failure />}
            { showForm.show && 
          <form 
            id={styles.form}
            onSubmit={(event) => submitForm(event)}
          >
            <label htmlFor="nameInput">
              Name:
              <br />
            <input 
            name="nameInput" 
            id={styles.nameInput}
            type="text"
            placeholder="name"
            value={formState.nameInput}
            onChange={(e) => handleChange(e)}
            min-lenth="2"
            aria-required="true"
            required
            />
            <br />
            </label>

            <label htmlFor="emailInput">
              Email:
              <br />
              <input 
                name="emailInput"
                id={styles.emailInput}
                type="email"
                placeholder="email"
                value={formState.emailInput}
                onChange={(e) => handleChange(e)}
                aria-required="true"
                required
              />
              <br/>
            </label>

            <label htmlFor="messageInput">
              Message:
              <br/>
            <textarea
              form="form"
              name="messageInput"
              id={styles.messageInput}
              cols="20" 
              rows="5" 
              placeholder="What's up?"
              value={formState.messageInput}
              onChange={(e) => handleChange(e)}
              aria-required="true"
              required
            >
            </textarea>
            <br/>
            </label>

            <button
              type="submit"
              id={styles.submit}>
              Submit
            </button>
          </form>
           }
          </div>
        </div>

        </div>

      </main>
      <Footer />
    </div>
  )
}
