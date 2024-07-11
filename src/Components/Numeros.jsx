import React from 'react'
import styles from './Numeros.module.css'

export const Numeros = () => {
  return (
    <>
    <h2 className={styles.titulo}>Nuestros Números</h2>
    
    
    <div className={styles.container}>
        <div className={styles.cuadroNumero}>
                <p className={styles.texto}>Años <br></br> cultivando</p>
                <h3 className={styles.numero}>+30</h3>
        </div>
        <div className={styles.cuadroNumero2}>
                <p className={styles.texto}>Hectáreas <br></br>activas</p>
                <h3 className={styles.numero}>+10K</h3>
        </div>
       
    </div>
    <div className={styles.container}>
        <div className={styles.cuadroNumero3}>
                <p className={styles.texto}>Inversores</p>
                <h3 className={styles.numero}>+60</h3>
        </div>
        <div className={styles.cuadroNumero4}>
                <p className={styles.texto}>Toneladas <br></br>exportadas</p>
                <h3 className={styles.numero}>150K</h3>
        </div>
       
    </div>
    
    </>
  )
}
