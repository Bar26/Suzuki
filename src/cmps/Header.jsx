import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import suzukiLogo from '../assets/img/suzuki-logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { loadCars } from '../store/CarActions'
import { carService } from '../services/carService'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'




export function Header() {

    const dispatch = useDispatch()
    const [isOnHover, setIsOnHover] = useState(false)
    const navRef = useRef()
    const headerRef = useRef()
    const topHeaderRef = useRef()
    const hrRef = useRef()
    const openMenuIcon = useRef()
    const closeMenuIcon = useRef()

    useEffect(() => {
        dispatch(loadCars())
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [isOnHover])

    const handleScroll = () => {
        if (window.pageYOffset <= 200 && window.pageYOffset >= 100) onHideNav()
        if (window.pageYOffset === 0) onShowNav()
    }

    const onHideNav = () => {
        if (navRef.current) navRef.current.classList.add('hide')
        topHeaderRef.current.style.boxShadow = '0 -0.5px 4px 0px #a9aaaf'
    }

    const onShowNav = () => {
        if (navRef.current) navRef.current.classList.remove('hide')
        topHeaderRef.current.style.boxShadow = 'none'
    }

    const onEnterHandle = () => {
        setIsOnHover(true)
        onShowNav()
    }

    const onLeaveHandle = () => {
        setIsOnHover(false)
        if (window.pageYOffset !== 0) {
            onHideNav()
        }
    }

    const toggleNavMenu = () => {
        openMenuIcon.current.classList.toggle('hide')
        closeMenuIcon.current.classList.toggle('hide')
        navRef.current.classList.toggle('nav-open')
    }

    const onCloseNavMenu=()=>{
        openMenuIcon.current.classList.remove('hide')
        closeMenuIcon.current.classList.add('hide')
        navRef.current.classList.remove('nav-open')
    }

    return (
        <header onMouseLeave={onLeaveHandle} onMouseEnter={onEnterHandle} className="header-container" ref={headerRef}>

            <div className="top-header" ref={topHeaderRef}>
                <span onClick={toggleNavMenu} className="nav-menu-icon " ref={openMenuIcon}><i class="fa-solid fa-ellipsis"></i></span>
                <span onClick={toggleNavMenu} className="close-menu-icon hide" ref={closeMenuIcon}><i class="fa-solid fa-arrow-right"></i></span>
                <Link className="main-logo" to="/"><img className="main-logo" src={suzukiLogo} alt="suzuki-logo" /></Link>
                <Link className="link-title" to="/"><h1 className="title">סוזוקי עפולה</h1></Link>
             
            </div>
            <div ref={navRef} className="nav-container">
                <hr ref={hrRef} />
                <nav className="main-nav" >
                    <NavLink onClick={onCloseNavMenu} className="navlink" to="/cars"><button>דגמים</button></NavLink>
                    <NavLink onClick={onCloseNavMenu} to="/purchase-process"><button>תהליך רכישה</button></NavLink>
                    <NavLink onClick={onCloseNavMenu} to="/gallery"><button>גלריה</button></NavLink>
                    <NavLink onClick={onCloseNavMenu} to="/contact-us"><button className="contact-us">צור קשר</button></NavLink>
                </nav>
            </div>

        </header>
    )
}