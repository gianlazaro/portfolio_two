import Project from "./Project";
import styles from "../styles/Projects.module.css";
import dogbg from '../assets/dogbg.webp'
import vegetationstation from '../assets/vegetationstation.webp'
import soulful from '../assets/soulful.webp'
import err from '../assets/err.webp'
import acftcalc from '../assets/acftcalc.webp'

export default function Projects() {
  return (
    <div class={styles.parent}>
      <img src={dogbg} class={styles.dogbg}/>
      <h2 class={styles.sectionTitle}>PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS PROJECTS • PROJECTS • PROJECTS</h2>
      <div class={styles.projectsContainer}>
        <Project
          imgUrl={vegetationstation}
          title="Vegetation Station"
          alt="Screenshots of the application's login page and homepage"
          description="A React Native application to facilitate plant swaps in the local vicinity with authentication and chat features."
          marginDirection="top"
          imgWidth="80%"
          gitLink="https://github.com/Blue-Ocean-DBZ/vegetationstation"
        />
        <Project
          imgUrl={soulful}
          title="Soulful"
          alt="Screenshot of a portion of the application's home page showing the product carousel"
          description="A product page built with React for an ecommerce website."
          marginDirection="left"
          imgWidth="50%"
          gitLink="https://github.com/ShamWow-FEC/soulful"
          />
        <Project
          imgUrl={err}
          title="Errr"
          description="A question-and-answer platform for small teams built with NextJS and Firebase Auth."
          alt="Screenshot of the homepage of the application showing a list of questions and a sidebar"
          imgWidth="80%"
          flipped="true"
          gitLink="https://github.com/gianlazaro/errr-mvp"
          liveLink="https://errr-mvp.vercel.app/"
        />
        <Project
          imgUrl={acftcalc}
          title="ACFTCalc"
          description="A US Army physical fitness test calculator to streamline grading process for graders and training rooms."
          alt="Screenshots of the application showing a blog article and the Army fitness calculator"
          imgWidth="50%"
          marginDirection="right"
          flipped="true"
          gitLink="https://github.com/gianlazaro/acftcalc"
          liveLink="https://acftcalc.com/"
        />
      </div>
    </div>
  );
}
