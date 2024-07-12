
import styles from './Guia.module.css'
import GuiaVideo from '../Media/guia.mp4'

export const Guia = () => {
  return (
    <>
    <div className={styles.fondo}>
    <video src={GuiaVideo} autoPlay muted loop className={styles.bannervideo}> </video>

    <div className={styles.cuadro}>
    <h5 className={styles.infoguia}>Si tienes preguntas te dejamos <br></br> nuestra guia para inversores</h5>
    <button className={styles.btnGuia}>Ver Guía</button>
    </div>
    </div>
    
    </>
  )
}
