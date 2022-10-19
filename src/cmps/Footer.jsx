import suzukiLogo from '../assets/img/suzuki-logo.png'
export function Footer() {


    return <footer className="main-footer">

        <section className="general">
            <header className="title">סוזוקי עפולה</header>
            <div className="address-container">
                <i className="fa-solid fa-location-dot"></i>
                <span>עפולה, רח' המלאכה 28</span>
            </div>

            <div className="mail-container">
                <i class="fa-solid fa-envelope"></i>
                <span>miro14@bezeqint.net</span>
            </div>
        </section>

        <section className="contact-us-footer">
            <header className="title">יצירת קשר</header>
            <div className="phone-container">
                <i class="fa-solid fa-phone-volume"></i>
                <span>04-6421771</span>
            </div>
            <div className="whatsapp-container">
                <i class="fa-brands fa-whatsapp"></i>
                <span>שוחח עם נציג</span>
            </div>
            <div className="go-to-form">
                <i class="fa-solid fa-pen-to-square"></i>
                <span>השארת פרטים</span>
            </div>


        </section>

        <section className="social-media">
            <img className="main-logo-footer" src={suzukiLogo} alt="suzuki-logo" />
            <div className='icon-container'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-google"></i>
            </div>

        </section>
    </footer>
}