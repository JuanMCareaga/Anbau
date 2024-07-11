import React from 'react';
import styles from './Noticias.module.css';
import {NoticiasComponente} from '../Components/NoticiasComponente';

const Noticias = () => {
  return (
    <>
     <div className={styles.banner}>

        <div className={styles.titulo}>
              <h2> Noticias</h2>
        </div>

      </div>

      <NoticiasComponente />
      <NoticiasComponente />

    </>
  )
}

export default Noticias