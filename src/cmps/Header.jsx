import { useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import suzukiLogo from '../assets/img/suzuki-logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { loadCars } from '../store/CarActions'




export function Header() {

    const dispatch = useDispatch()
    const { cars } = useSelector((state) => state.carModule)
    const navRef = useRef()
    const headerRef = useRef()
    const topHeaderRef = useRef()
    const hrRef = useRef()
    // const hrRef2 = useRef()


    useEffect(() => {
        dispatch(loadCars())
        window.addEventListener('scroll', (ev) => {
            if (window.pageYOffset > 200) onScroll()
            if (window.pageYOffset === 0) onNoScroll()
        })
    }, [])

    const onScroll = () => {
        if (navRef.current) {
            navRef.current.classList.add('hide')
            topHeaderRef.current.style.boxShadow = '0 -0.5px 4px 0px #a9aaaf'
            hrRef.current.classList.add('hide')
        }
        // hrRef2.current.classList.add('hide')
    }

    const onNoScroll = () => {
        navRef.current?.classList.remove('hide')
        hrRef.current.classList.remove('hide')
        // hrRef2.current.classList.remove('hide')
        topHeaderRef.current.style.boxShadow = 'none'
    }

    // useLayoutEffect(() => {
    //     window.addEventListener('scroll', (ev) => {
    //         if (window.pageYOffset > 200)
    //             console.log('yes');
    //             navRef.current.classList.add('hide')
    //     })
    // })



    return (
        <header className="header-container" ref={headerRef}>
            <div className="top-header" ref={topHeaderRef}>
                <Link className="main-logo" to="/"><img className="main-logo" src={suzukiLogo} alt="suzuki-logo" /></Link>
                <Link className="link-title" to="/"><h1 className="title">סוזוקי עפולה</h1></Link>
                <label className="main-search-label">חיפוש
                    <input className="main-search" type="text" />
                </label>
            </div>
            <hr ref={hrRef} />
            <nav className="main-nav" ref={navRef} >
                <Link to="/cars"><button>דגמים</button></Link>
                <Link to="/purchase-process"><button>תהליך רכישה</button></Link>
                <button>גלריה</button>
                <button className="contact-us">צור קשר</button>
            </nav>
            {/* <hr ref={hrRef2} /> */}

            {/* <Link to="/">
            <img className="main-logo" src="https://res.cloudinary.com/debmbjvbh/image/upload/v1663763939/suzuki/suzuki-logo_srs563.png" />
            </Link> */}

        </header>
    )
}