
import styles from './Inversionistas.module.css'
import { CategoriasBlock } from '../Components/CategoriasBlock'
import { Guia } from '../Components/Guia'
import Registrarimg from '../Images/maquina.jpg'
import Experiencia from '../Images/señor.jpg'
import Stock from '../Images/silo2.jpg'
import Campo from '../Images/campo.jpg'
import mitigacion from '../Images/somos2.jpg'
import socio from '../Images/socio.jpg'



export const Inversionistas = () => {
  return (
    <>
    <div className={styles.banner}>

      <div className={styles.titulo}>
      <h2> Inversionistas </h2>
      </div>

    </div>
    <div className={styles.encabezado}>
      <h1>¿Por qué invertir con nosotros? </h1>
      <h2>Aquí tienes algunas razones convincentes:</h2>
    </div>
    <div className={styles.contenedorCards}>
      <div className={styles.card1}>
        <div className={styles.infocard}>
        <h3>Maquinaria Propia:</h3>
        <p>Para asegurar que todas las labores se realicen en tiempo y forma, disponemos de maquinaria propia de última generación. Esto nos permite mantener un control total sobre nuestros procesos y maximizar la eficiencia en nuestras operaciones agrícolas.</p>
        </div>
        <div className={styles.imagencard}>
        <img src={Registrarimg} alt="img" />
      </div>
 
      </div>
      <div className={styles.card2}>
        <div className={styles.infocard}>
        <h3>Experiencia y Especialización:</h3>
        <p>Contamos con un equipo altamente especializado en cada etapa de la cadena de producción agrícola, acumulando más de 30 años de experiencia en cada proceso. Nuestros expertos están dedicados a optimizar cada aspecto de nuestras operaciones para garantizar el éxito y la rentabilidad de nuestras inversiones.</p>
        </div>
        <div className={styles.imagencard}>
        <img src={Experiencia} alt="img" />
      </div>
 
      </div>
    </div>
    <div className={styles.contenedorCards}>
      <div className={styles.card2}>
        <div className={styles.infocard}>
        <h3>Amplio Stock de Insumos:</h3>
        <p>Contamos con un amplio stock de insumos agrícolas de alta calidad, lo que nos permite garantizar el abastecimiento constante de los recursos necesarios para nuestras actividades productivas.</p>
        </div>
        <div className={styles.imagencard}>
        <img src={Stock} alt="img" />
      </div>
 
      </div>
      <div className={styles.card1}>
        <div className={styles.infocard}>
        <h3>Grandes Extensiones de Siembra:</h3>
        <p> Poseemos extensas hectáreas de tierras de siembra, lo que nos brinda una base sólida para nuestras operaciones y nos permite escalar nuestras actividades de manera efectiva para satisfacer la demanda del mercado.</p>
        </div>
        <div className={styles.imagencard}>
        <img src={Campo} alt="img" />
      </div>
 
      </div>
    </div>
    <div className={styles.contenedorCards}>
      <div className={styles.card1}>
        <div className={styles.infocard}>
        <h3>Mitigación de riesgos:</h3>
          <p>
            • Diversificación en las áreas de producción (Catamarca, Tucumán, Córdoba).<br />
            • Diversificación en cultivos (soja, maíz, poroto).<br />
            • Manejo eficiente de recursos.<br />
            • Cobertura con operaciones financieras.<br />
            • Decisión de producción según el desempeño de los cultivos.</p>
        </div>
        <div className={styles.imagencard}>
        <img src={mitigacion} alt="img" />
      </div>
 
      </div>
      <div className={styles.card2}>
        <div className={styles.infocard}>
        <h3>Alianzas Comerciales y Acceso a Contratos:</h3>
        <p>A través de nuestras sólidas alianzas comerciales, tenemos acceso a contratos que garantizan seguridad, rentabilidad y transparencia en nuestras operaciones. Estos acuerdos nos permiten mitigar riesgos y maximizar los retornos para nuestros inversores.</p>
        </div>
        <div className={styles.imagencard}>
        <img src={socio} alt="img" />
      </div>
 
      </div>
    </div>
    <Guia />
    <CategoriasBlock />
    </>
  )
}
