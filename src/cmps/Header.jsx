import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import suzukiLogo from '../assets/img/suzuki-logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { loadCars } from '../store/CarActions'
import { carService } from '../services/carService'
import { useState } from 'react'




export function Header() {

    const dispatch = useDispatch()
    const [isOnHover, setIsOnHover] = useState(false)
    const navRef = useRef()
    const headerRef = useRef()
    const topHeaderRef = useRef()
    const hrRef = useRef()

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
        if(navRef.current) navRef.current.classList.add('hide')
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



    return (
        <header onMouseLeave={onLeaveHandle} onMouseEnter={onEnterHandle} className="header-container" ref={headerRef}>
            <div  className="top-header" ref={topHeaderRef}>
                <Link className="main-logo" to="/"><img className="main-logo" src={suzukiLogo} alt="suzuki-logo" /></Link>
                <Link className="link-title" to="/"><h1 className="title">סוזוקי עפולה</h1></Link>
                <label className="main-search-label">חיפוש
                    <input className="main-search" type="text" />
                </label>
            </div>
            <div ref={navRef} className="nav-container">
                <hr ref={hrRef} />
                <nav className="main-nav" >
                    <Link to="/cars"><button>דגמים</button></Link>
                    <Link to="/purchase-process"><button>תהליך רכישה</button></Link>
                    <Link to="/gallery"><button>גלריה</button></Link>
                    <Link to="/contact-us"><button className="contact-us">צור קשר</button></Link>
                </nav>
            </div>

        </header>
    )
}