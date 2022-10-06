import styles from '../styles/Footer.module.css'
import energydrink from '../assets/energydrink.webp'

export default function Footer() {
  return (
    <footer class={styles.footerWrapper}>
      Created with the help of
      <img src={energydrink} loading="lazy"/> Panera's Unlimited Charged Lemonades
    </footer>
  )
}