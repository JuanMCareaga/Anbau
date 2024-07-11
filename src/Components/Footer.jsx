import React from 'react'
import styles from './Footer.module.css'
import logo from '../Images/anbauLogo.png'

export const Footer = () => {
  return (
    <>
    
    <div className={styles.footerContainer}> 
        <div className={styles.imgFoot}>
            <img src={logo} alt='logofoot'></img>
        </div> 
        <div className={styles.links}>
            <h4>Links importantes</h4>
            <ul>
                <li>Sobre nos</li>
                <li>Proyectos</li>
                <li>Galeria</li>
                <li>Invertir</li>
                <li>Políticas de privacidad</li>
                <li>Términos y condiciones</li>



            </ul>
        </div>
        <div className={styles.links}>
            <h4>Contacto directo</h4>
            <ul>
                <li>Dirección: Lavalle, Argentina</li>
                <li>Tel: +8801323455677</li>
                <li>Email: info@agro.com</li>
                



            </ul>
        </div>
        <div className={styles.links}>
            <h4>Seguinos en</h4>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Youtube</li>
                



            </ul>
        </div>
        
    </div>
    
    </>
  )
}
