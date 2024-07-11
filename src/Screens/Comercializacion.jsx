
import styles from './Comercializacion.module.css';
import sobrenosImg from '../Images/sobrenos.jpg';
import FormularioComercializacion from '../Components/FormularioComercializacion'
import  { CategoriasBlock } from '../Components/CategoriasBlock'


export const Comercializacion = () => {
  return (
    <>
    
    <div className={styles.banner}>

        <div className={styles.titulo}>
            <h2> Comercializacion</h2>
        </div>

    </div>

    <section className={styles.infoSobre}>
      <div className={styles.texto}>
        <h3>En Anbau, nos especializamos en facilitar todas las etapas del proceso de comercialización de granos. Nuestros servicios incluyen:</h3>
        <h2>Compra y Venta de Granos: </h2>
        <p>Gestionamos eficientemente la compra y venta de granos, conectando a productores y compradores para garantizar transacciones fluidas y justas.
      </p>
      <h2>Venta de Insumos:</h2>
        <p>Ofrecemos servicios de venta de insumos agrícolas. Proporcionamos acceso a una amplia gama de productos de alta calidad para satisfacer las necesidades específicas de nuestros clientes.
      </p>
      <h2>Exportaciones: </h2>
        <p> Facilitamos el proceso de exportación de granos, asegurando la cumplimentación de todos los requisitos legales y logísticos. Trabajamos en estrecha colaboración con socios logísticos confiables para garantizar la entrega oportuna y segura de los productos.
      </p>
      <h2>Análisis de Mercado:</h2>
        <p>Nuestro equipo dedicado estudia continuamente el mercado para identificar tendencias, evaluar precios y detectar oportunidades de negocios. Utilizamos esta información para asesorar a nuestros clientes y asegurar los mejores resultados en sus transacciones.
      </p>
      <h2>Alianzas Estratégicas:</h2>
        <p>Gracias a nuestras sólidas alianzas estratégicas en el ámbito de la comercialización y la producción, podemos ofrecer a nuestros clientes un alcance global y una mayor seguridad en sus operaciones. Trabajamos con socios confiables para garantizar la eficacia y la fiabilidad de nuestras actividades comerciales.
      </p>
        
        
      </div>
      <div className={styles.imgSobre}> <img src={sobrenosImg} alt=''></img></div>
    </section>

    <FormularioComercializacion />
   <CategoriasBlock /> 
    
    </>
  )
}
