import sectionStyles from "../styles/Section.module.css";
import aboutStyles from "../styles/About.module.css";
import melissa from "../public/images/me.png";
import linkedin from "../public/images/In-Black-34px-TM.png";
import github from "../public/images/GitHub-Mark-32px.png";
import Image from "next/image";
import behance from "../public/images/behance.svg";


export default function About(){
  return (
    <div>
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span><h2 className={sectionStyles.title}>About</h2><span className={sectionStyles.spanright}></span>
      </div>
    <div className={sectionStyles.section} 
      id={sectionStyles.about} 
      name="about">

        {/*Main Bio Text Part */}
      <div id={aboutStyles.topSpacer}>
        <div id={aboutStyles.picWrapper}>
          <Image src={melissa} alt="photo of Melissa Kepler photoshopped to look like it came from a space ship information display" width="100px" height="100px"/>
          </div>
          <h2>Greetings!</h2>
        
        <div id={aboutStyles.textWrapper}>
          <p>
          I was the owner of Melissa Kepler Web Design & Development, but I am currently looking for a full-time Front End or Full Stack React remote position.
          </p>
          <p>
          I have been using every cheap or free resource I can to learn to be a JavaScript developer since 2015. I can’t remember what “Learn How To Code” website got me, but they got me. I love the idea of a career where you can grow through learning in ways that aren’t just traditional education.
          </p>
          <p>I have finished the Front End tracks for Team Treehouse and Free Code Camp a while back. I have been working on the updated version of FreeCodeCamp's curriculum recently. In 2018 I won a Grow with Google scholarship for Udacity’s Mobile Web Specialist Nanodegree and earned my Nanodegree. A lot of my learning has been through project creation. <a href="https://github.com/Missarachnid" id={aboutStyles.gitLink}>My GitHub is full of projects, please take a look!</a></p>
          <p>Paragraph about Gap</p>
          <p>I love space, and that might have something to do with my last name! I also love dinosaurs and wanted to be a paleontologist as a child (my favorite is Archaeopteryx!). In my spare time I am into bodybuilding, playing with my dogs, and reading and watching anything Carl Sagan ever worked on. I am a former member of Women Who Code Atlanta and I was a co-host of Woodstock Northwest OTP meetups before I relocated to Denver.</p>
        </div>
      </div>

      {/* prof Links */}
      <div id={aboutStyles.profLinks} >

        <div className={aboutStyles.profSpacer}>
          <a className={aboutStyles.iconLink} href="https://www.linkedin.com/in/mmkepler/"> 
            Work History: 
            <div className={aboutStyles.logos}>
              <Image src={linkedin} alt="The LinkedIn logo." />
            </div>
            </a>
          </div>
        

        <div className={aboutStyles.profSpacer}>
          <a className={aboutStyles.iconLink} href="https://github.com/Missarachnid">
            Coding Projects: 
            <div className={aboutStyles.logos}>
              <Image src={github} alt="The GitHub Octocat logo." />
            </div>
          </a>
        </div>

        <div className={aboutStyles.profSpacer}>
          <a className={aboutStyles.iconLink} href="https://www.behance.net/mmkepler">
            Artistic Work: 
            <div className={aboutStyles.logos}>
              <Image src={behance} alt="The Behance logo." width={32} height={32}/>
            </div>
          </a>
        </div>

      </div>

      <h3>Educational Certificates</h3>
      <div id={aboutStyles.certs}>
        <a className={aboutStyles.links} href="/images/StanfordCert.pdf">
          Stanford Online Computer Science 101 Certificate
        </a>
        <a  className={aboutStyles.links} href="/images/udacity.jpg">
          Udacity Nanodegree in Mobile Web Specialist
        </a>
      </div>

      {/*Prof Links End */}

      <h3>Free Code Camp Certifications Links</h3>
      <div id={aboutStyles.fcc}>
        
      <a className={aboutStyles.links} href="https://www.freecodecamp.org/certification/missarachnid/responsive-web-design" >
        Responsive Web Design
      </a>
      <a className={aboutStyles.links} href="https://www.freecodecamp.org/certification/missarachnid/javascript-algorithms-and-data-structures">
        JS Algorithms and Data Structures
      </a>
      <a className={aboutStyles.links} href="https://www.freecodecamp.org/certification/missarachnid/back-end-development-and-apis">
        Back End Development & APIs
      </a>
      </div>
      
    </div>
    </div>
  )
}