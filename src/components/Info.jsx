import styles from '../styles/Info.module.css'
import avatar from '../assets/avatar.webp'
import resumeicon from '../assets/resumeicon.webp'
import linkedinicon from '../assets/linkedinicon.webp'
import githubicon from '../assets/githubicon.webp'

export default function Info() {
  return (
    <>
      <section class={styles.infoWrapper}>
        <div>
          <p>Hello Visitor! 👋🏻</p>
          <p>It's nice to see you get to the end of my portfolio!</p>

          <p><em>Quick reintroduction:</em> My name's Gian and I enjoy <span class={styles.highlight}>experimenting on the front-end side of things</span>. I have experience with <span class={styles.highlight}>HTML, CSS, Javascript and ReactJS</span>, learning on my own for the past two years. A more thorough list of all frameworks and tools I have worked with are on <span class={styles.highlight}><a href="#">my resume</a></span>.</p>
          <p>
          On that note, I am looking for <span class={styles.highlight}>opportunities to develop to be a better front-end developer</span>. I am open to learning new technologies and growing with a company that holds values that I value: <span class={styles.highlight}>trust and autonomy, with a side of fun</span>.
          </p>
          <p>Send me an email if you're interested: <span class={styles.highlight}><a href="mailto:hello@gianlazaro.com">hello@gianlazaro.com</a></span></p>
          <p>Cheers! 🍻</p>
        </div>
        <article class={styles.avatarPane}>
          <div>
            <img src={avatar} loading="lazy"/>
            <h3>Gian Lazaro</h3>
          </div>
          <div class={styles.links}>
            <a href="https://drive.google.com/file/d/1UlYBXxEaEztCR9dFtkLXSy5PVfmGfhhH/view?usp=sharing" target="_blank">
              <img src={resumeicon} loading="lazy"/>
              Resume</a>
            <a href="https://www.linkedin.com/in/gianlazaro" target="_blank">
              <img src={linkedinicon} loading="lazy"/>
              LinkedIn</a>
            <a href="https://www.github.com/gianlazaro" target="_blank">
              <img src={githubicon} loading="lazy"/>
              Github</a>
          </div>
        </article>
      </section>
    </>
  );
}
