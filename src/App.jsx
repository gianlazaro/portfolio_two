import styles from './App.module.css';
import Header from './components/Header'
import Projects from './components/Projects'
import Experiments from './components/Experiments'
import Info from './components/Info'
import Footer from './components/Footer'
import { createSignal, createEffect } from 'solid-js';

function App() {
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / window.innerHeight);
});
  return (
    <div class={styles.App}>
      <Header/>
      <Projects/>
      <Experiments/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
