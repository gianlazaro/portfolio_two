import styles from '../styles/Header.module.css'
import avatarcartoon from '../assets/avatarcartoon.webp'
import palmtree from '../assets/palmtree.webp'

export default function Header() {
  return (
    <header class={styles.headerContainer}>
      <h1>
        I'm <b>Gian</b>! <span class={styles.mobileHeader}>
          I am a front-end <span class={styles.nowrap}>developer <img src={avatarcartoon} class={styles.developerIcon}/></span> </span><span class={styles.mobileHeaderVanish}>based in <span class={styles.nowrap}>Los Angeles <img src={palmtree} class={styles.sunsetIcon}/></span></span>
      </h1>
    </header>
  )
}