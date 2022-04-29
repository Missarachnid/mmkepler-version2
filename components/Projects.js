import sectionStyles from "../styles/Section.module.css";
import Image from "next/image";
import website from "../public/images/202-sphere.svg";
import github from "../public/images/GitHub-Mark-32px.png";
import projectData from "../components/data";
import projectData2 from "../components/data2";
import projectData3 from "../components/data3";

export default function Projects(props){
  console.log("project props", props.shown);
  return (
    <div>
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span>
        <h2 className={sectionStyles.title}>Projects</h2><span className={sectionStyles.spanright}>
        </span>
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

        {( (props.shown.two === false && props.shown.three === false) ? <button className={sectionStyles.showMore} id={sectionStyles.button1} onClick={(e) => props.onClick(e)}>Show More</button> : "")}

        <div className={sectionStyles.cardSpacer} >
        {(props.shown.two === true ? (projectData2.map(function(el, index){
          return (
            
          <div className={sectionStyles.card} key={index} id={sectionStyles.section2}>
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
          
        })) : "")}
        </div>

        {( props.shown.two === true && props.shown.three === false ? <button className={sectionStyles.showMore} id={sectionStyles.button2} onClick={(e) => props.onClick(e)}>Show More</button> : "")}

        <div className={sectionStyles.cardSpacer} >
        {(props.shown.three ? (projectData3.map(function(el, index){
          return (
            
          <div className={sectionStyles.card} key={index} id={sectionStyles.section3}>
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
          
        })) : "")}
        </div>
      </div>
    </div>
  )
}

/*
import sectionStyles from "../styles/Section.module.css";
import Image from "next/image";
import website from "../public/images/202-sphere.svg";
import github from "../public/images/GitHub-Mark-32px.png";
import projectData from "../components/data";

export default function Projects(){

  return (
    <div>
      <div className={sectionStyles.holder}>
      <span className={sectionStyles.spanleft}></span>
        <h2 className={sectionStyles.title}>Projects</h2><span className={sectionStyles.spanright}>
        </span>
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
*/