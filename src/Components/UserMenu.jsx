
import { FaUser } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './UserMenu.module.css'

const UserMenu = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaUser style={{ marginRight: '10px' }} className={styles.icon}/>
      <Dropdown>
        <Dropdown.Toggle  variant="primary" id="dropdown-basic" className={styles.BtnmenuLog}>
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.desplegable}>
          <Dropdown.Item className={styles.item} href="#/action-1">Autenticarse</Dropdown.Item>
          <Dropdown.Item className={styles.item} href="#/action-2">Inversiones</Dropdown.Item>
          <Dropdown.Item className={styles.item} href="#/action-3">Salir</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default UserMenu;
