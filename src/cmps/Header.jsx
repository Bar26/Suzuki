import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import suzukiLogo from '../assets/img/suzuki-logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { loadCars } from '../store/CarActions'




export function Header() {

    const dispatch = useDispatch()
	// const { curCar } = useSelector((state) => state.carModule)
	const { cars } = useSelector((state) => state.carModule)


    useEffect(() => {
        dispatch(loadCars())
        console.log(cars);
    }, [])



    return (
        <header className="header-container">
            <div className="top-header">
                <img className="main-logo" src={suzukiLogo} alt="suzuki-logo" />
                <h1 className="title">סוזוקי עפולה</h1>
                <label className="main-search-label">חיפוש
                    <input className="main-search" type="text" />
                </label>
            </div>
            <hr />
            <nav className="main-nav" >
                <button>דגמים</button>
                <button>תהליך רכישה</button>
                <button>גלריה</button>
                <button className="contact-us">צור קשר</button>
            </nav>
            {/* <Link to="/">
            <img className="main-logo" src="https://res.cloudinary.com/debmbjvbh/image/upload/v1663763939/suzuki/suzuki-logo_srs563.png" />
            </Link> */}

        </header>
    )
}