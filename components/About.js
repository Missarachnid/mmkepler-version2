import sectionStyles from "../styles/Section.module.css";
import aboutStyles from "../styles/About.module.css";
import melissa from "../public/images/me.png";
import linkedin from "../public/images/In-Black-34px-TM.png";
import github from "../public/images/GitHub-Mark-32px.png";
import Image from "next/image";
import behance from "../public/images/behance.svg";
import resume from "../public/images/resume.png";

export default function About(){
  return (
    <section id={sectionStyles.about} 
    name="about">
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span><h2 className={sectionStyles.title} tabIndex="0">About</h2><span className={sectionStyles.spanright}></span>
      </div>
    <div className={sectionStyles.section} >

        {/*Main Bio Text Part */}
      <div id={aboutStyles.topSpacer}>
        <div id={aboutStyles.picWrapper}>
          <Image src={melissa} alt="photo of Melissa Kepler photoshopped to look like it came from a space ship information display" width="100px" height="100px"/>
          </div>
          <h3 tabIndex="0">Greetings Earthlings!</h3>
        <div id={aboutStyles.textWrapper}>
          <p tabIndex="0">
          I was the owner of Melissa Kepler Web Design &amp; Development, but I am currently looking for a full-time Front End or Full Stack React remote position.
          </p>
          <p tabIndex="0">
          I have been using every cheap or free resource I can to learn to be a JavaScript developer since 2015.
           I can&apos;t remember what “Learn How To Code” website got me, but they got me.
            I love the idea of a career where you can grow through learning in ways that aren&apos;t just traditional education.
          </p>
          <p tabIndex="0">I earned Free Code Camp Certifications in Responsive Web Design, JavaScript Algorithms &#38; Data Structures, and Back End Development &#38; APIs.
             In 2018 I won a Grow with Google scholarship and earned Udacity&apos;s Mobile Web Specialist Nanodegree.
              A lot of my learning has been through project creation. &nbsp;
              <a href="https://github.com/Missarachnid" target="_blank" rel="noreferrer" id={aboutStyles.gitLink}>My GitHub is full of projects, please take a look!</a>
          </p>
          <p tabIndex="0"><strong>The dreaded resume gap!</strong> - Just as I was going to make my career jump into programming, my finance died from injuries caused by a car accident on our way to get married.
             I had to settle his estate while dealing with my PTSD, and I took time off to do this. During this time I started my own business and did some graphic and web work. I also worked on studying as well.
              In early 2020 I decided to move to Denver and go back to work. Then the country shut down, and I started having a lot of health issues. I didn&apos;t think I
            had COVID, but I got a lot of symptoms of &lsquo;Long COVID&lsquo;. My body decided to go haywire. I fought it with all my energy and I am now feeling like I did before this nightmare began.
             I am ready to take on the world again.
          </p>
          <p tabIndex="0">I love space. That might have something to do with my last name!
             I also love dinosaurs and wanted to be a paleontologist as a child (my favorite is Archaeopteryx!).
              I am a former member of Women Who Code Atlanta and I was a co-host of Woodstock Northwest OTP meetups before I relocated to Denver.
          </p>
          <p tabIndex="0">Although I included links, I don&apos;t spend much time on social media. Frankly I would rather just have tweets from birds.</p>
        </div>
        <div id={aboutStyles.resume}>
          <a href="/images/Melissa_Kepler_resume.pdf" target="_blank" rel="noreferrer">
          <p>Check out my resume here : &nbsp; 
            <Image src={resume} height={32} width={32}
            className={aboutStyles.logos} id={aboutStyles.resumeIcon} alt="icon of a resume"/> 
          </p>
          </a>
        </div>
      </div>

      {/* prof Links */}
      <div id={aboutStyles.profLinks} >

        <div className={aboutStyles.profSpacer}>
          <a className={aboutStyles.iconLink} href="https://www.linkedin.com/in/mmkepler/" target="_blank" rel="noreferrer"> 
            Work History: 
            <div className={aboutStyles.logos}>
              <Image src={linkedin} alt="The LinkedIn logo." />
            </div>
            </a>
          </div>
        
        <div className={aboutStyles.profSpacer}>
          <a className={aboutStyles.iconLink} href="https://github.com/Missarachnid" target="_blank" rel="noreferrer">
            Coding Projects: 
            <div className={aboutStyles.logos}>
              <Image src={github} alt="The GitHub Octocat logo." />
            </div>
          </a>
        </div>

        <div className={aboutStyles.profSpacer}>
          <a className={aboutStyles.iconLink} href="https://www.behance.net/mmkepler" target="_blank" rel="noreferrer">
            Artistic Work: 
            <div id={aboutStyles.behance}>
              <Image src={behance} alt="The Behance logo." height={32} width={32}/>
            </div>
          </a>
        </div>

      </div>

      <h3 tabIndex="0">Educational Certificates</h3>
      <div id={aboutStyles.certs}>
        <a className={aboutStyles.links} href="/images/StanfordCert.pdf" target="_blank" rel="noreferrer">
          Stanford Online Computer Science 101 Certificate
        </a>
        <a  className={aboutStyles.links} href="/images/udacity.jpg" target="_blank" rel="noreferrer">
          Udacity Nanodegree in Mobile Web Specialist
        </a>
      </div>

      {/*Prof Links End */}

      <h3 tabIndex="0">Free Code Camp Certifications Links</h3>
      <div id={aboutStyles.fcc}>
        
      <a className={aboutStyles.links} href="https://www.freecodecamp.org/certification/missarachnid/responsive-web-design" target="_blank" rel="noreferrer">
        Responsive Web Design
      </a>
      <a className={aboutStyles.links} href="https://www.freecodecamp.org/certification/missarachnid/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer">
        JS Algorithms and Data Structures
      </a>
      <a className={aboutStyles.links} href="https://www.freecodecamp.org/certification/missarachnid/back-end-development-and-apis" target="_blank" rel="noreferrer">
        Back End Development &amp; APIs
      </a>
      </div>
      
    </div>
    </section>
  )
}