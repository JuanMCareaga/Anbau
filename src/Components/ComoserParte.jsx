
import styles from './Comoserparte.module.css';
import { Link } from 'react-router-dom';


export const ComoserParte = () => {
  return (
    <>
    <div className={styles.comoContenedor}>
        <div className={styles.titulo}>
        <h2>Como ser parte de ANBAU</h2>
        </div>
        <div className={styles.cardServiciosContainer}>
        <div className={styles.cardServicios}>
        <h4> <Link className={styles.link} to={'/Comercializacion'}> Comercialización </Link> </h4>
        </div>
        <div className={styles.cardServicios2}>
        <h4> <Link className={styles.link} to={'/Inversionistas'}> Inversionistas </Link> </h4>
            
        </div>
        <div className={styles.cardServicios3}>
        <h4> <Link className={styles.link} to={'/Asociados'}> Asociados </Link> </h4>
            
        </div>
        </div>

    </div>
    </>
  )
}
