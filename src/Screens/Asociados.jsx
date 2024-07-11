
import styles from './Asociados.module.css'
import { CategoriasBlock } from '../Components/CategoriasBlock'
import FormularioComercializacion from '../Components/FormularioComercializacion'
import sobrenosImg from '../Images/asociados.jpg';



const Asociados = () => {
  return (
    <>
    <div className={styles.banner}>

        <div className={styles.titulo}>
            <h2> Asociados</h2>
        </div>

    </div>
    <div className={styles.texto}>
    <div className={styles.imgSobre}> <img src={sobrenosImg} alt=''></img></div>
    <h2>ANBAU cuenta con una estructura completa en cada eslabón de la cadena de producción agrícola. Si te falta algún recurso o servicio para complementar tus operaciones <br /> <br /> ¡Nosotros te ayudamos!</h2>
    </div>
    

    <FormularioComercializacion />

    <CategoriasBlock />
    </>
  )
}

export default Asociados