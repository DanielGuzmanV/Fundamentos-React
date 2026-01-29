import {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isConceptOpen, setIsConceptOpen] = useState(false);

  return (
    <div className={styles.layoutContainer}>
      <button className={styles.hamburger} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        ☰
      </button>

      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open: ''}`}>
        <div className={styles.logo}>
          <h2>React Master</h2>
        </div>

        <nav className={styles.nav}>
          <Link to={PATHS.HOME} onClick={() => setIsSidebarOpen(false)}>Inicio</Link>

          <div className={styles.menuItemContainer}>
            <button
              className={styles.menuBtn}
              onClick={() => setIsConceptOpen(!isConceptOpen)}
            >
              Conceptos {isConceptOpen ? '▲' : '▼'}
            </button>
            {isConceptOpen && (
              <div className={styles.subMenu}>
                <Link to={PATHS.BASICOS}>Basicos</Link>
                <Link to={PATHS.INTERMEDIOS}>Intermedios</Link>
                <Link to={PATHS.AVANZADOS}>Avanzados</Link>
              </div>
            )}
          </div>
          
          <Link to={PATHS.EJEMPLOS}>Ejemplos</Link>
          <Link to={PATHS.PRUEBAS}>Pruebas</Link>
          <hr className={styles.separator}/>
          <Link to={PATHS.LOGIN}>Inciar sesion</Link>
        </nav>
      </aside>

      {/* {isSidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}/>} */}

      <main className={styles.mainContent}>
        <Outlet/>
      </main>

    </div>
  )
}