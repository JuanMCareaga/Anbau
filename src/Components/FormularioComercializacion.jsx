import { useState } from 'react';
import styles from './FormularioComercializacion.module.css'
import logo from '../Images/anbauver.jpg'




const ContactForm = () => {
  const [contactType, setContactType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a una API
    console.log({ contactType, name, email, company, message });
  };

  const handleOptionClick = (option) => {
    setContactType(option);
    setShowOptions(false);
  };

  return (
    <>
    <section className={styles.formulario}>

    <form onSubmit={handleSubmit} >
      <h2 className={styles.titl}>Tipo de contacto</h2>
      <button className={styles.tipo} type="button" onClick={() => setShowOptions(!showOptions)}>
        {contactType || 'Seleccione un tipo 🔻'}
      </button>
      {showOptions && (
          <ul className={styles.opciones} style={{ listStyleType: 'none', padding: 0 }}>
          <li onClick={() => handleOptionClick('Comprar granos')}>Comprar granos.</li>
          <li onClick={() => handleOptionClick('Vender granos')}>Vender granos.</li>
          <li onClick={() => handleOptionClick('Comprar insumos')}>Comprar insumos</li>
          <li onClick={() => handleOptionClick('Exportar')}>Exportar</li>
        </ul>
      )}
      <h2 className={styles.titl}>Nombre completo</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <h2 className={styles.titl}>E-mail</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      <h2 className={styles.titl}>Empresa</h2>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        />
      <h2 className={styles.titl}>Mensaje</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      <button className={styles.enviar} type="submit">Enviar</button>
    </form>
    
        <div className={styles.contenedorimg}> 
        <img src={logo} alt='logofoot'></img>
        </div>
        </section>
        </>
  );
};

export default ContactForm;
