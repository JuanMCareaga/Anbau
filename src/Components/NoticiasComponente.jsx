
import styles from './NoticiasComponente.module.css'
import noti1 from '../Images/galeria7.jpg'
import noti2 from '../Images/noticia2.jpg'


export const NoticiasComponente = () => {
  return (
    <>
    <h1>Noticias</h1>

    <div className={styles.sectorNoti}>
        <div className={styles.cardNoticia}>
            <img src={noti1} alt='noti1' className={styles.imgNoticia}></img>
            <div className={styles.contenido}>
                <h6>TITULO NOTICIA</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className={styles.btnLeer}>Leer Más</button>
            </div>
        </div>
        <div className={styles.cardNoticia}>
            <img src={noti2} alt='noti1' className={styles.imgNoticia}></img>
            <div className={styles.contenido}>
                <h6>TITULO NOTICIA</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className={styles.btnLeer}>Leer Más</button>
            </div>
        </div>
    </div>
    </>
  )
}
