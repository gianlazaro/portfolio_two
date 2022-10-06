import styles from '../styles/Experiments.module.css'
import yvescreen from '../assets/yvescreen.webp'
import scrolleffect from '../assets/scrolleffect.webp'
import revolvebanner from '../assets/revolvebanner.webp'
import lamountains from '../assets/lamountains.webp'
import stamp from '../assets/stamp.webp'

export default function Experiments() {
  return (
    <section class={styles.experimentWrapper}>
      <div class={styles.container}>
        <img src={stamp} class={styles.stamp} loading="lazy"/>
        <div class={styles.experimentCarousel}>
          <img src={yvescreen} loading="lazy"/>
          <img src={scrolleffect} loading="lazy"/>
          <img src={revolvebanner} loading="lazy"/>
          <img src={lamountains} loading="lazy"/>
        </div>
      </div>
      <a href="https://www.codepen.io/_gianlazaro" target="_blank">
        See more on CodePen
      </a>
    </section>
  );
}
