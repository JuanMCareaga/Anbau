
import styles from './Invertir.module.css';
import { CategoriasBlock } from '../Components/CategoriasBlock';
import { Guia } from '../Components/Guia'

import { Banner } from '../Components/Banner'
import BannerVideo from '../Media/invertir.mp4'
import ButtonCard from '../Components/ButtonCard';



const Invertir = () => {
  return (
    <>
    <Banner BannerVideo={BannerVideo} text='¿Como invertir con ANBAU?'/>


    <section className={styles.pasos}>
      <h1>Haz tu inversión de manera sencilla 
con los siguientes pasos</h1>
  <ButtonCard/> 

   
    
    
    </section>

     <Guia/>
    <CategoriasBlock/>
    </>
  )
}

export default Invertir