import { Link } from 'react-router-dom'



export function Header() {



    return (
        <header className="header-container">
            <nav className="main-nav" >
                <button>דגמים</button>
                <button>תהליך רכישה</button>
                <button>גלריה</button>
            </nav>
            <Link to="/">
            <img className="main-logo" src="https://res.cloudinary.com/debmbjvbh/image/upload/v1663763939/suzuki/suzuki-logo_srs563.png" />
            </Link>
            <button className="contact-us">צור קשר</button>
        </header>
    )
}