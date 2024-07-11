import  { useState } from 'react';
import styles from '../Components/Verificacion.module.css';
import id1 from '../Images/id2.png'
import id2 from '../Images/id1.png'
import Registrarimg from '../Images/anbauver.jpg'



const Verificacion = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <form className={styles.fomulario}>
              <div className={styles.contenedorform} >
                <div className={styles.columna}>

                <div className={styles.inputform}>
                  <label>Nombre completo</label>
                  <input type="text" name="nombreCompleto" />
                </div>
                <div className={styles.inputform}>
                  <label>E-mail</label>
                  <input type="email" name="email" />
                </div>
                <div className={styles.inputform}>
                  <label>Dirección</label>
                  <input type="text" name="direccion" />
                </div>
                <div className={styles.inputform}>
                  <label>Código postal</label>
                  <input type="text" name="codigoPostal" />
                </div>
                </div>
                <div className={styles.columna}>

                <div className={styles.inputform}>
                  <label>Teléfono</label>
                  <input type="text" name="telefono" />
                </div>
                <div className={styles.inputform}>
                  <label>Nacionalidad</label>
                  <input type="text" name="nacionalidad" />
                </div>
                <div className={styles.inputform}>
                  <label>Fecha de nacimiento</label>
                  <input type="date" name="fechaNacimiento" />
                </div>
                <div className={styles.inputform}>
                  <label>Documento de identidad</label>
                  <input type="text" name="documentoIdentidad" />
                </div>
                </div>
              </div>
              <div className={styles.contenedorboton}>

              <button className={styles.botonnext} type="button" onClick={handleNext}>Siguiente</button>
              </div>
            </form>
          </div>
        );
      case 2:
        return (
              <>
            <div className={styles.contenedorcargar}>
            <div className={styles.cardcargar}>
            <div className={styles.imgcargar}> <img src={id1} alt=''></img></div>
            <div className={styles.infocarga}>

              <label>Cargar frente</label>
              <input type="file" name="cargarFrente" />
            </div>
            </div>
            <div className={styles.cardcargar}>
            <div className={styles.imgcargar}> <img src={id2} alt=''></img></div>
            <div className={styles.infocarga}>
              <label>Cargar dorso</label>
              <input type="file" name="cargarDorso" />
            </div>
            </div>
          </div>
          <div className={styles.contenedorboton}>

            <button className={styles.botonnext} type="button" onClick={handleNext}>Siguiente</button>
          </div>
              </>
        );
      case 3:
        return (
          <div>
            <div className={styles.cardPasos}>
        <div className={styles.texto}>
        <h2 className={styles.titulocard}>¡Todo listo! ya puedes finalizar la autenticación</h2>
        
        
        </div>
        <div className={styles.imagencard}>
          <img src={Registrarimg} alt="img" />
        </div>
  
      </div>
            <div className={styles.contenedorboton}>
              <button className={styles.botonnext} type="button">Finalizar</button>
              </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <div className={styles.titulos}>
      <h2 style={{ background: step === 1 ? 'lightgreen' : 'none' }}>Datos personales</h2>
      <h2 style={{ background: step === 2 ? 'lightgreen' : 'none' }}>Documentos</h2>
      <h2 style={{ background: step === 3 ? 'lightgreen' : 'none' }}>Finalizar</h2>
    </div>
      {renderFormStep()}
    </>
  );
};

export default Verificacion;
