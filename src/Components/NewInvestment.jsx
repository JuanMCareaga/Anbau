import styles from '../Components/NewInvestment.module.css'
import  { useState } from 'react';

const NewInvestment = () => {
  const [cultivo, setCultivo] = useState('');
  const [tipo, setTipo] = useState('');
  const [monto, setMonto] = useState('');
  const [campo, setCampo] = useState('');

  const handleCalculate = () => {
    // Aquí puedes agregar la lógica para calcular el resultado
    console.log({ cultivo, tipo, monto, campo });
  };

  return (
    <>
      <h1 className={styles.titulocal}>Nueva Inversión</h1>
    <div className={styles.containerclc}>
      <div>

      <div>
        <label className={styles.datocalc}>
          Seleccione el cultivo
          <select value={cultivo} onChange={(e) => setCultivo(e.target.value)}>
            <option value="">--Seleccione--</option>
            <option value="maiz">Maíz</option>
            <option value="soja">Soja</option>
            <option value="poroto">Poroto</option>
          </select>
          
        </label>
      </div>
      <div>
        <label className={styles.datocalc}>
          Seleccione el tipo
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">--Seleccione--</option>
            <option value="fija">Fija</option>
            <option value="variable">Variable</option>
          </select>
          
        </label>
      </div>
      </div>
      <div>

      <div>
        <label className={styles.datocalc}>
          Monto a invertir
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            />
        </label>
      </div>
      <div>
        <label className={styles.datocalc}>
          Campo
          <input
            type="text"
            value={campo}
            onChange={(e) => setCampo(e.target.value)}
            />
        </label>
      </div>
      </div>
    </div>
      <div className={styles.contenedorbtn}>
      <button onClick={handleCalculate}>Invertir</button>
      </div>
    </>
  );
};

export default NewInvestment;
