import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useScrollPosition } from '../Hooks/scrollPosition';
import Logo from '../Images/logo.png'

import UserMenu from './UserMenu';


const Navbar = () => {

    const [navBarOpen , setnavBarOpen] = useState(false);
    const [windowDimension, setwindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const detectDimension = () => {
        setwindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    useEffect(() =>{
        window.addEventListener('resize', detectDimension)
        windowDimension.width > 800 && setnavBarOpen(false)
        return () =>{
        window.removeEventListener('resize', detectDimension)
        }
    }, [windowDimension])
  
    const links = [
        {
            id: 1,
            link: "Inicio",
            name: "Inicio",
            href:"/inicio",
        },
        {
            id: 2,
            link: "SobreNos",
            name: "SobreNos",
            href:"/sobrenos",
        },
        {
            id: 3,
            link: "Servicios",
            name: "Servicios",
            href:"/servicios",
        },
        {
            id: 4,
            link: "Galeria",
            name: "Galeria",
            href:"/galeria",
        },
       
        {
            id: 5,
            link: "Noticias",
            name: "Noticias",
            href:"/noticias",
        },
    ]

    const scrollPosition = useScrollPosition()

  return (
    <div className={ navBarOpen ? styles.navOpen : scrollPosition > 0 ? styles.navOnScroll : styles.navBar}>
       { !navBarOpen && <div className='Logo'> <Link  onClick={() => setnavBarOpen(false)}
                   key={'Inicio'}
                   to={'/Inicio'}
                   smooth
                   duration={500}> <img src={Logo}  alt='logo' /></Link> </div>}
       { !navBarOpen && windowDimension.width < 800 ?  (<TiThMenu onClick={() => setnavBarOpen(!navBarOpen)} size={25} />)
        : windowDimension.width < 800 && (<IoClose  onClick={() => setnavBarOpen(!navBarOpen)} size={25} className={styles.equis} /> )} 



       {navBarOpen && (
         <ul className={styles.linksContainer}>
        {links.map(x => (
            
           <div key="">
               <Link
               onClick={() => setnavBarOpen(false)}
               className={styles.navLink}
               key={x.name}
               to={x.href}
               scrollPosition
               

               > {x.link === "SobreNos" ? "Sobre Nos" : x.link} </Link>
           </div>
        ) )} 
               <UserMenu/>

       </ul>
       )}
       {
        windowDimension.width > 800 && (
            <ul className={styles.linksContainer}>
            {links.map(x => (
               <div key="">
                   <Link
                   onClick={() => setnavBarOpen(false)}
                   to={x.link}
                   smooth
                   duration={500}
                   className={styles.navLink}
    
                   > {x.link === "SobreNos" ? "Sobre Nos" : x.link} </Link>
               </div>
            ) )}   
               <UserMenu/>
            
           </ul>
        )
       }
    </div>
  )
}

export default Navbar