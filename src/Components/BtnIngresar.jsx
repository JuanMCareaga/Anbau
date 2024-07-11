import  { useState } from 'react';
import styles from './BtnIngresar.module.css'

const LoginButton = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario de inicio de sesión, por ejemplo, enviar los datos a una API
    console.log({ username, password });
    setShowLoginPopup(false); // Ocultar el pop-up después de enviar los datos
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario de registro, por ejemplo, enviar los datos a una API
    console.log({
      registerUsername,
      registerEmail,
      registerPassword,
      registerConfirmPassword,
    });
    setShowRegisterPopup(false); // Ocultar el pop-up después de enviar los datos
  };

  return (
    <div>
      <button  className={styles.boton} onClick={() => setShowLoginPopup(true)}>Ingresar</button>

      {showLoginPopup && (
        <>
          <div className={styles.popup}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              
              backgroundColor: 'white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              zIndex: 1000,
            }}
          >
            <button
              onClick={() => setShowLoginPopup(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              ✖️
            </button>
            <form onSubmit={handleLogin}>
              <h2>Iniciar Sesión</h2>
              <div className={styles.userpass}>
                <label>Usuario</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className={styles.userpass}>
                <label>Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className={styles.btnIngresar} type="submit">Ingresar</button>
            </form>
            <div className={styles.notienes} style={{ marginTop: '20px' }}>
              <p>¿No tienes cuenta?</p>
              <button
                onClick={() => {
                  setShowLoginPopup(false);
                  setShowRegisterPopup(true);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'green',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Regístrate
              </button>
            </div>
          </div>
          <div
            onClick={() => setShowLoginPopup(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
          ></div>
        </>
      )}

      {showRegisterPopup && (
        <>
          <div className={styles.popup}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              
              backgroundColor: 'white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              zIndex: 1000,
            }}
          >
            <button
              onClick={() => setShowRegisterPopup(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              ✖️
            </button>
            <form onSubmit={handleRegister}>
              <h2>Registro</h2>
              <div className={styles.userpass}>
                <label>Nombre de usuario</label>
                <input
                  type="text"
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                  required
                />
              </div>
              <div className={styles.userpass}>
                <label>Email</label>
                <input
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.userpass}>
                <label>Contraseña</label>
                <input
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                />
              </div>
              <div className={styles.userpass}>
                <label>Repetir contraseña</label>
                <input
                  type="password"
                  value={registerConfirmPassword}
                  onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button className={styles.btnIngresar} type="submit">Registrar</button>
            </form>
          </div>
          <div
            onClick={() => setShowRegisterPopup(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default LoginButton;
