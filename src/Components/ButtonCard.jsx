import  { useState } from 'react';
import './ButtonCard.css';
import Registrarimg from '../Images/regsitrarse.jpg'
import Invertirimg from '../Images/invertir3.jpg'
import security from '../Images/seguridad2.jpg'
import BtnIngresar from './BtnIngresar'



const ButtonCard = () => {
  const [activeButton, setActiveButton] = useState('Registrarse');

  const renderCard = () => {
    switch(activeButton) {
      case 'Registrarse':
        
      return <div className="cardPasos">
        <div className="texto">
        <h2 className="titulocard">Primer paso: registrar una cuenta en ANBAU</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate laudantium, quae sit aperiam illum harum nobis a nulla temporibus! Veniam vero accusamus ducimus et harum molestias ullam consectetur ipsam doloribus?</p>
        <BtnIngresar/>
        </div>
        <div className="imagencard">
          <img src={Registrarimg} alt="img" />
        </div>
  
      </div>;


      case 'Autenticarse':
        return <div className="cardPasos">
        <div className="texto">
        <h2 className="titulocard">Segundo paso: Autenticar su identidad</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate laudantium, quae sit aperiam illum harum nobis a nulla temporibus! Veniam vero accusamus ducimus et harum molestias ullam consectetur ipsam doloribus?</p>
        
        </div>
        <div className="imagencard">
          <img src={security} alt="img" />
        </div>
  
      </div>;
      case 'Invertir':
        return <div className="cardPasos">
        <div className="texto">
        <h2 className="titulocard">Tercer paso: Invertir con Anbau</h2>
        <p>Growing vegetables in your own garden can be a rewarding and fulfilling
experience.Not only does it provide you with fresh and nutritious produce,
but it also allows you to connect with nature and enjoy the satisfaction 
of watching your plants thrive.</p>
        
        </div>
        <div className="imagencard">
          <img src={Invertirimg} alt="img" />
        </div>
  
      </div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="button-container">
        <button 
          className={activeButton === 'Registrarse' ? 'active' : ''} 
          onClick={() => setActiveButton('Registrarse')}
        >
          Registrarse
        </button>
        <button 
          className={activeButton === 'Autenticarse' ? 'active' : ''} 
          onClick={() => setActiveButton('Autenticarse')}
        >
          Autenticarse
        </button>
        <button 
          className={activeButton === 'Invertir' ? 'active' : ''} 
          onClick={() => setActiveButton('Invertir')}
        >
          Invertir
        </button>
      </div>
      {renderCard()}
    </div>
  );
};

export default ButtonCard;
