import React from 'react'
import styles from './Galeria.module.css'
import galeria1 from '../Images/galeria1.jpg'
import galeria2 from '../Images/galeria2.jpg'
import galeria3 from '../Images/galeria3.jpg'
import galeria4 from '../Images/galeria4.jpg'
import galeria5 from '../Images/galeria5.jpg'
import galeria6 from '../Images/galeria6.jpg'
import galeria7 from '../Images/galeria7.jpg'


import { CategoriasBlock } from '../Components/CategoriasBlock'




const Galeria = () => {
  return (
    <>
    <div className={styles.banner}>

    <div className={styles.titulo}>
      <h2>Galeria</h2>
    </div>
 
    </div>
    
    <section className={styles.galeriaContainer}>
      <div className={styles.cuadros1}>
        <img src={galeria1} alt="" />
        <img src={galeria2} alt="" />

      </div>
      <div className={styles.cuadro2}>
        <img src={galeria3} alt="" />
      </div>
      <div className={styles.cuadros1}>
        <img src={galeria4} alt="" />
        <img src={galeria5} alt="" />

      </div>
      <div className={styles.cuadro2}>
        <img src={galeria6} alt="" />
      </div>
      <div className={styles.cuadro2}>
        <img src={galeria7} alt="" />
      </div>

    </section>
    <CategoriasBlock/>
    </>
  )
}

export default Galeria