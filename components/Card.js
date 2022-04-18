  import sectionStyles from "../styles/Section.module.css";
  import Image from "next/image";
  
  const Card = (props) => (
    <div className={sectionStyles.cardSpacer}>

          <div className={sectionStyles.card}>
            <div className={sectionStyles.imageWrapper} >
              <Image src={props.image} alt={props.altText} className={sectionStyles.projectImage} width={50} height={50}/>
            </div>
            <h2 className={sectionStyles.projectsTitle}>{props.name}</h2>
            <p className={sectionStyles.text}>{props.text}</p>
              
            <div className={sectionStyles.cardMenu}>
              
              <button className={sectionStyles.buttonWrapper}>
                <Image src={props.webLink} alt="The universal symbol for website" width={32} height={32}  className={sectionStyles.topImage}/>
              </button>
              {/*<span className={sectionStyles.divider}></span>*/}
              <button className={sectionStyles.buttonWrapper}>
                <Image src={props.gitLink} alt="The logo for github"/>
              </button>
            </div>
          </div>

        </div>
  );
  export default Card;