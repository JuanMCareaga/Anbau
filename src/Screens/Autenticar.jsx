
import Verificacion from '../Components/Verificacion'
import {Guia} from '../Components/Guia'
import styles from '../Screens/Autenticar.module.css'

export const Autenticar = () => {
  return (
    <>
    <div className={styles.banner}>

        <div className={styles.titulo}>
        <h2> Autenticar </h2>
        </div>

        </div>
        <div className={styles.conttitle}>

        <h1 className={styles.tituloaut}>Completa los siguientes pasos para 
        autenticar tu identidad</h1>
        </div>
        <Verificacion />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Guia/>
    </>
  )
}
