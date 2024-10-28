import { NavLink } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react';
import styles from "./Navbar.module.css";
import { FaMagnifyingGlass, FaServicestack } from "react-icons/fa6";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { MdAppRegistration, MdContactMail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiFillCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const curScrollPosition = window.pageYOffset;
      const difference = prevScrollPosition - curScrollPosition;
      setScrollPosition(curScrollPosition);
      
      if (difference < 0 && curScrollPosition > 100) {
        // Scrolling down
        if (window.innerWidth >= 888){
          setIsOpen(true)
          setAuth(false)
          navbarRef.current.style.top = "-80px";
        } else {
          setIsOpen(false)
          setAuth(false)
          navbarRef.current.style.top = "-80px";
        }
        
      } else {
        // Scrolling up or at the top
        navbarRef.current.style.top = "0";
      }
      setPrevScrollPosition(curScrollPosition);
      
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

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
  const handleClickOutsideAuth = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
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

      if (window.innerWidth >= 888) {
        if (document.addEventListener) {
          document.addEventListener('mousedown', handleClickOutsideAuth);
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

  const navbarStyle = {
    top: scrollPosition > 100 ? '-80px' : 0,
    transition: 'top 0.5s',
    zIndex: 20,
    backdropFilter: 'blur(10px)'
  };

  const navi = {
    top: isOpen ? '100%' : 0,
    transition: 'right 0.8s ease', // Apply transition to the right property
    zIndex: 20,
    backdropFilter: 'blur(10px)'
  };

  return (
    <header className={styles.doubleNav}>
      <nav ref={navbarRef} className={styles.navbar} style={navbarStyle}>
        <div className={styles.navContainer}>
          <span className={styles.logo}>
            <img src="https://i.ibb.co/SJKcm7M/imageL23.png" alt="Your Logo Description" />
          </span>

          <div className={styles.nav}>
            <div className={styles.hamburger}>
              {isOpen ? (
                <div style={{ fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <AiFillCloseSquare className={styles.menu} onClick={toggleMenu} />
                </div>
              ) : (
                <div style={{ fontSize: "30px" }}>
                  <BsFillMenuButtonWideFill className={styles.menu} onClick={toggleMenu} />
                </div>
              )}
            </div>

            {isOpen && (
              <div style={isOpen && navi} className={styles.navLinks}>
                <div className={styles.links}>
                  <NavLink to="/" className={styles.link}><FaHome className={styles.linksContent} /> <span>Home</span></NavLink>
                  <NavLink to="/about" className={styles.link}><TbArrowRoundaboutRight className={styles.linksContent} /><span>About</span></NavLink>
                  <NavLink to="/services" className={styles.link}><FaServicestack className={styles.linksContent} /> <span>Services</span></NavLink>
                  <NavLink to="/portfulio" className={styles.link}><LiaBusinessTimeSolid className={styles.linksContent} /> <span>Portfolio</span></NavLink>
                  <NavLink to="/contact" className={styles.link}><MdContactMail className={styles.linksContent} /> <span>Contact</span></NavLink>
                </div>
              </div>
            )}

            <div className={styles.searchPerson}>
              <span className={styles.icons}>
                <FaMagnifyingGlass />
              </span>
              <div onClick={toggleAuth} className={styles.authentication}>
                <span className={styles.icons}>
                  <CgProfile />
                </span>

                {auth && (
                  <div className={styles.authBtn}>
                    <a className={styles.signAuthBtn}><MdAppRegistration className={styles.linksContent} /> <span>Sign Up</span></a>
                    <a className={styles.signAuthBtn}><FaSignInAlt className={styles.linksContent} /> <span>Sign In</span></a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
