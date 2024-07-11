
import { Link } from 'react-router-dom';
import styles from './CategoriasBlock.module.css';
import Somos from '../Images/somos.png';
import Gale from '../Images/galeria.png';
import invert from '../Images/invertir.png';
import Servic from '../Images/servicios.png';



export const CategoriasBlock = () => {
  return (
    <>

<h2 className={styles.tituloSeccion}> Categorias</h2>

<div className={styles.categorias}>
<div className={styles.contenedorCategoria}>
  <div className={styles.cuadroCat}>
    <img src={Somos} alt='ver'></img>
    <Link key='Sobrenos' to='/sobrenos' className={styles.link}> <h6 className={styles.nombreCat}> 
    Sobre nos
     </h6></Link>
  </div>
  <div className={styles.cuadroCat}>
    <img src={Gale} alt='ver'></img>
    <Link key='Galeria' to='/galeria' className={styles.link}>
    <h6 className={styles.nombreCat}>Galeria</h6>
    </Link>
  </div>
</div>
<div className={styles.contenedorCategoria}>
  <div className={styles.cuadroCat}>
    <img src={Servic} alt='ver'></img>
    <Link key='Servicios' to='/servicios' className={styles.link}>
    <h6 className={styles.nombreCat}>Servicios</h6>
    </Link>
  </div>
  <div className={styles.cuadroCat}>
    <img src={invert} alt='ver'></img>
    <Link key='Invertir' to='/Invertir' className={styles.link}>
    <h6 className={styles.nombreCat}>Invertir</h6>
    </Link>
  </div>
</div>    




  
  

</div>


    </>
  )
}
