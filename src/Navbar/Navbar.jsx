import React, { useEffect, useRef, useState } from 'react'
import styles from "./Navbar.module.css"
import { FaBed, FaMagnifyingGlass, FaPerson } from "react-icons/fa6";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillCloseSquare } from "react-icons/ai";

const Navbar = () => {

  
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  const navbarRef = useRef(null);

  const toggleAuth = () => {
    if (window.innerWidth >= 888) {
      setAuth(!auth)
      setIsOpen(true)
    } else {
      setAuth(!auth)
      setIsOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setAuth(false)
};

const handleClickOutside = (event) => {

    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setAuth(false)
    }
};

useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 888) { 
            setIsOpen(true);
            if (document.removeEventListener) {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        } else {
            setIsOpen(false);
            if (document.addEventListener) {
                document.addEventListener('mousedown', handleClickOutside);
            }
        }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        if (document.removeEventListener) {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    };
}, []);


  return (
    <section className={styles.doubleNav}>
      <section ref={navbarRef} className={styles.navbar}>
        <div className={styles.navContainer}>
        <span className={styles.logo}>
        <img src="https://i.ibb.co/SJKcm7M/imageL23.png" alt="logo234" border="0"/>
        </span>

        <div className={styles.nav}>
        <div className={styles.hamburger}>
              {isOpen ? (
                  <div style={{fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <AiFillCloseSquare className={styles.menu} onClick={toggleMenu} /></div>
              ) : (
                  <div style={{fontSize: "30px"}}><BsFillMenuButtonWideFill className={styles.menu} onClick={toggleMenu} /></div>
              )}
          </div>
        {isOpen && <div className={styles.navLinks}>
          <div className={styles.links}>
            <a className={styles.link} >Home</a>
            <a className={styles.link} >Tours Page</a>
            <a className={styles.link} >Destination</a>
            <a className={styles.link} >Pages</a>
            <a className={styles.link} >News</a>
            <a className={styles.link} >Contact</a>
          </div>
        </div>}

          <div className={styles.searchPerson}>
            <span className={styles.icons}>
              <FaMagnifyingGlass />
            </span>
            <div onClick={toggleAuth} className={styles.authentication}>
              <span className={styles.icons}>
                <CgProfile />
              </span>

              {auth ? <div className={styles.authBtn}>
                <a className={styles.signAuthBtn} >Sign Up</a>
                <a className={styles.signAuthBtn} >Sign In</a>
              </div> : null}
            </div>
          </div>
        </div>

        {/* <div className={styles.navContainer}>
            
            <div className={styles.navItems}>
                <FaBed />
                <button className={styles.navButton}>Register</button>
                <button className={styles.navButton}>Login</button>
            </div>
        </div> */}
        </div>
    </section>
    </section>
  )
}

export default Navbar