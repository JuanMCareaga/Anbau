import Imgcard from '../Images/campo.jpg'
import styles from './Cardinver.module.css'



export const Cardinver = () => {
  return (
    <>
    <div className={styles.cardinver}>
        <div className={styles.contimg}>
            <img src={Imgcard} alt="" />
        </div>
        <div className={styles.infocard}>
            <div>
                <h2>Campo Lavalle</h2>
                <p>info de transacciones</p>
            </div>
            <div className={styles.contbtn}>

            <button>Detalles</button>
            </div>
        </div>
    </div>

    </>
  )
}
