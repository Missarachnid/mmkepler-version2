import sectionStyles from "../styles/Section.module.css";
import Image from "next/image";
import planet from "../public/images/bullet.png";

const codingSkills = ["JavaScript/ES6+", "React/Hooks", "Redux", "CSS/Flexbox", "Styled Components", "Bootstrap", "Sass", "Node.js", "Express.js", "MongoDB", "Accessibility", "npm", "Git/GitHub", "Firebase DB & Auth", "Webpack/Babel", "Gulp/Grunt", "Rest APIs", "JQuery"];
const deploymentSkills = ["Cpanel", "Heroku", "AWS/S3", "Digital Ocean", "Netlify"];
const knowledgeableSkills = ["Next.js", "Workbox/PWA", "Google Analytics", "Apollo/GraphQL", "Keystone.js", "Python/PHP", "WordPress", "SEO", "Cloudflare", "Adobe XD"];
const artisticSkills = ["Graphic Design", "Photo Editing", "Photoshop", "Illustrator", "Sketch", "3D Animation/Modeling"];
const allSkills = ["codingSkills", "deploymentSkills", "knowledgeableSkills", "artisticSkills"];

export default function Skills(){
  return (
    <section id={sectionStyles.skills} 
    name="skills">
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span><h2 className={sectionStyles.title} tabIndex="0">Skills</h2><span className={sectionStyles.spanright}></span>
      </div>
      <div className={sectionStyles.section} >
      <div id={sectionStyles.skillsContainer}>
        <div id={sectionStyles.skillsWrapper} >
        
        <div id={sectionStyles.columns}>
        
          <div id={sectionStyles.one}>
            <div>
            <h3 className={sectionStyles.skilltTitles}>Coding Skills</h3>
            <ul>
              {codingSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index}><Image src={planet} alt="" width={10} height={9}/>{el}</li>
                )
              })}
            </ul>
          </div>

        
              
          <div>
            <h3 className={sectionStyles.skilltTitles}>Deployment Platforms</h3>
            <ul>
              {deploymentSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index}><Image src={planet} alt="" width={10} height={9}/>{el}</li>
                )
              })}
            </ul>
          </div>

          </div>

          <div id={sectionStyles.two}>

          <div>
            <h3 className={sectionStyles.skilltTitles}>Knowledgeable In:</h3>
            <ul>
              {knowledgeableSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index}><Image src={planet} alt="" width={10} height={9}/>{el}</li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className={sectionStyles.skilltTitles}>Artistic Skills:</h3>
            <ul>
              {artisticSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index}><Image src={planet} alt="" width={10} height={9}/>{el}</li>
                )
              })}
            </ul>
          </div>

          </div>

        </div>

        </div>
      </div>
    </div>
    </section>
  )
}


/*
export default function Skills(){
  return (
    <section id={sectionStyles.skills} 
    name="skills">
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span><h2 className={sectionStyles.title} tabIndex="0">Skills</h2><span className={sectionStyles.spanright}></span>
      </div>
      <div className={sectionStyles.section} >
      <div id={sectionStyles.skillsContainer}>
        <div id={sectionStyles.skillsWrapper} >
        <ul>
          <li tabIndex="0"><h3>Coding Skills:</h3></li>
          <li tabIndex="0"><Image src={planet} alt="" width={10} height={9}/> JavaScript/ES6+</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> React/Redux</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> CSS/FlexBox</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} />Bootstrap</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> npm</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> Git/GitHub</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> Node.js</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> Express</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> MongoDB</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> JQuery</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> Webpack/babel</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> FirebaseDB/Auth</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> Gulp/Grunt</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> Heroku/AWS</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9} /> Cpanel</li>
        </ul>
        
        <ul>
          <li tabIndex="0"><h3>Knowledgeable:</h3></li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> Next.js</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> Workbox/PWA</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> Google Analytics</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> Apollo/GraphQL</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> Python/PHP</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> Wordpress</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> SEO practices</li>
        </ul>

        <ul>
          <li tabIndex="0"><h3>Artistic</h3></li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> Graphic Design</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> Photo Editing</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> Photoshop</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> Illustrator</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> Sketch</li>
          <li tabIndex="0"><Image src={planet} alt=""  width={10} height={9}/> 3D Animation/Modeling</li>
        </ul>
        </div>
      </div>
    </div>
    </section>
  )
}
*/