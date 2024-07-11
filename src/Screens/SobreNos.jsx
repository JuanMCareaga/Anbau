
import styles from './SobreNos.module.css'
import sobrenosImg from '../Images/sobrenos.jpg'
import { CategoriasBlock } from '../Components/CategoriasBlock'
import BannerVideo from '../Media/sobrenos.mp4'
import { Banner } from '../Components/Banner'


const SobreNos = () => {
  return (
    <>
    <Banner BannerVideo={BannerVideo} text='Sobre nosotros'/>
    
    <section className={styles.infoSobre}>
      <div className={styles.texto}>
        <h1>¿Quiénes somos?</h1>
        <p>En Anbau, nos enorgullecemos de nuestros más de 30 años de experiencia en la industria agrícola. Nos especializamos en la producción de granos, ofrecemos una amplia gama de servicios agrícolas y suministramos insumos de calidad. Además, destacamos en la comercialización y exportación de granos, abarcando todas las oportunidades que ofrece el campo. Durante estas décadas, hemos forjado sólidos lazos comerciales con importantes empresas del sector, lo que nos proporciona protección, compromiso y, lo más importante, resultados finales de excelencia.
      </p>
        <p>
          Como pilar fundamental de la economía y uno de los sectores más competitivos, el campo es un generador de empleo vital y el principal exportador de Argentina. En anbau, nuestra misión es facilitar la participación de pequeños y grandes inversores en este dinámico sector. Buscamos simplificar la comercialización para los productores, crear alianzas estratégicas y aprovechar todas las oportunidades del mercado mundial. A través de la introducción de nuevas tecnologías, nos comprometemos a proporcionar trazabilidad y transparencia en todas nuestras operaciones, mientras reducimos activamente el impacto ambiental. Nos esforzamos por alcanzar un posicionamiento y alcance global, conectando y potenciando a las personas y empresas que desean ser parte del crecimiento y desarrollo sostenible del sector agrícola.
        </p>
      </div>
      <div className={styles.imgSobre}> <img src={sobrenosImg} alt=''></img></div>
    </section>
    <CategoriasBlock/>
   
    </>
  )
}

export default SobreNos