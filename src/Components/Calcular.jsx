

import styles from './Calcular.module.css'
import  { useState } from 'react';

const Calculators = () => {
  const [cultivo, setCultivo] = useState('');
  const [tipo, setTipo] = useState('');
  const [monto, setMonto] = useState('');
  const [periodo, setPeriodo] = useState('');

  const handleCalculate = () => {
    // Aquí puedes agregar la lógica para calcular el resultado
    console.log({ cultivo, tipo, monto, periodo });
  };

  return (
    <>
      <h1 className={styles.titulocal}>Calculadora de inversiones</h1>
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
          Ingresar monto
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            />
        </label>
      </div>
      <div>
        <label className={styles.datocalc}>
          Periodo de espera
          <input
            type="number"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            />
        </label>
      </div>
      </div>
    </div>
      <div className={styles.contenedorbtn}>
      <button onClick={handleCalculate}>Calcular</button>
      </div>
    </>
  );
};

export default Calculators;
