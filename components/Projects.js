import sectionStyles from "../styles/Section.module.css";
import Image from "next/image";
import website from "../public/images/202-sphere.svg";
import github from "../public/images/GitHub-Mark-32px.png";
import projectData from "../components/data";

export default function Projects(){

  return (
    <div>
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span><h2 className={sectionStyles.title}>Projects</h2><span className={sectionStyles.spanright}></span>
      </div>
      <div className={sectionStyles.section} id={sectionStyles.projects} name="projects">
      <div className={sectionStyles.cardSpacer} >

        {projectData.map(function(el, index){
          return (
            
          <div className={sectionStyles.card} key={index}>
            <div className={sectionStyles.imageWrapper} >
              <Image src={el.image} alt={el.altText} className={sectionStyles.projectImage} width={50} height={50}/>
            </div>
            <div className={sectionStyles.textWrap}>
            <h2 className={sectionStyles.projectsTitle}>{el.name}</h2>
            <p className={sectionStyles.text}>{el.text}</p>
            </div>
            <div className={sectionStyles.cardMenu}>
              
              <button className={sectionStyles.buttonWrapper}>
                <Image src={website} alt="The universal symbol for website" width={32} height={32}  className={sectionStyles.topImage}/>
              </button>
              <button className={sectionStyles.buttonWrapper} src={el.gitLink}>
                <Image src={github} alt="The logo for github"/>
              </button>
            </div>
            </div>
          )
          
        })}
        </div>
      </div>
    </div>
  )
}

/*
export default function Projects(){
  return (
    <div>
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span><h2 className={sectionStyles.title}>Projects</h2><span className={sectionStyles.spanright}></span>
      </div>
      <div className={sectionStyles.section} id={sectionStyles.projects} name="projects">
        <div className={sectionStyles.cardSpacer}>

          <div className={sectionStyles.card}>
            <div className={sectionStyles.imageWrapper} >
              <Image src={calc} alt="A graphic of a digital calculator" className={sectionStyles.projectImage} width={50} height={50}/>
            </div>
            <h2 className={sectionStyles.projectsTitle}>Calculator</h2>
            <p className={sectionStyles.text}>Lorem Ipsum and such, blah blah blah. Yakity Schackity and some junk.</p>
              
            <div className={sectionStyles.readmoreWrapper}>
              <p  className={sectionStyles.readmore}>Learn More</p>
            </div>
            <div className={sectionStyles.cardMenu}>
              
              <div className={sectionStyles.websiteWrapper}>
                <Image src={website} alt="The universal symbol for website" width={32} height={32}  className={sectionStyles.topImage}/>
              </div>
              <span className={sectionStyles.divider}></span>
              <div className={sectionStyles.githubWrapper}>
                <Image src={github} alt="The logo for github"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
*/