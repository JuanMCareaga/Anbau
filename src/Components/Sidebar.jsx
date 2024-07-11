import  { useState } from 'react';
import { FaCalculator, FaWallet, FaChartBar, FaList, FaQuestionCircle, FaExclamationCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

const Sidebar = ({ onSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: <FaCalculator />, text: 'Calculadores de inversiones' },
    { icon: <FaWallet />, text: 'Nueva inversión' },
    { icon: <FaChartBar />, text: 'Mis inversiones' },
    { icon: <FaList />, text: 'Mis campos' },
    { icon: <FaQuestionCircle />, text: 'Preguntas frecuentes' },
    { icon: <FaExclamationCircle />, text: 'Ayuda' },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
    onSelect(index);
  };

  return (
    <div className={styles.sidebar}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={styles.menuItem}
          style={{
            backgroundColor: activeIndex === index ? '#DAE1E2' : 'transparent',
          }}
        >
          {item.icon}
          <span className={styles.text}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};



Sidebar.propTypes = {
    onSelect: PropTypes.func.isRequired,
  };

export default Sidebar;
