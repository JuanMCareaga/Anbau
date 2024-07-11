
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
        <h1>Completa los siguientes pasos para 
        autenticar tu identidad</h1>
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
