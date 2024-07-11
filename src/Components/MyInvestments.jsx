import { Cardinver } from "./Cardinver";
import styles from './Myinvestment.module.css'


const MyInvestments = () => {
    return (
      <div>
        <h1 className={styles.titulo}>Mis inversiones</h1>
        <Cardinver />
        <Cardinver />
        <Cardinver />

      </div>
    );
  };
  
  export default MyInvestments;
  