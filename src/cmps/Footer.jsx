import { Link } from 'react-router-dom'
import suzukiLogo from '../assets/img/suzuki-logo.png'
export function Footer() {


    return <footer className="main-footer">

        <section className="general">
            <header className="title" >
                <span>סוזוקי עפולה - </span>
                <span >סוכנות רכב מורשית  </span>
            </header>
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
                <a className="phone-link-footer" href="tel://+972509225509">
                    <i class="fa-solid fa-phone-volume"></i>
                    <span>04-6421771</span>
                </a>
            </div>
            <div className="whatsapp-container">
                <a className="whatsapp-link" href="https://wa.me/97246421771?text=%20אשמח %20לפרטים %20נוספים" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i>
                    <span>שוחח עם נציג</span>
                </a>
            </div>
            <Link className="go-to-form" to="/contact-us">
                <i class="fa-solid fa-pen-to-square"></i>
                <span>השארת פרטים</span>
            </Link>


        </section>

        <section className="social-media">
            <img className="main-logo-footer" src={suzukiLogo} alt="suzuki-logo" />
            <div className='icon-container'>
                {/* <i class="fa-brands fa-instagram"></i> */}
                <a href="https://www.facebook.com/afulasuzuki" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.google.com/search?q=%D7%A1%D7%95%D7%96%D7%95%D7%A7%D7%99%20%D7%A2%D7%A4%D7%95%D7%9C%D7%94&oq=%D7%A1%D7%95%D7%96%D7%95%D7%A7%D7%99+%D7%A2%D7%A4%D7%95%D7%9C%D7%94+&aqs=chrome..69i57j0i512l3j0i15i22i30l2j69i65j69i61.3067j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:4&tbm=lcl&sxsrf=ALiCzsY4zcXCdDJsRtEpAiknxnH1xHRvdQ:1668616819538&rflfq=1&num=10&rldimm=6015298515628119498&lqi=ChfXodeV15bXlden15kg16LXpNeV15zXlCIDiAEBWiEiF9eh15XXlteV16fXmSDXotek15XXnNeUKgYIAhAAEAGSAQpjYXJfZGVhbGVy&ved=2ahUKEwihsa2GkrP7AhUChf0HHef9CooQvS56BAgTEAE&sa=X&rlst=f#rlfi=hd:;si:6015298515628119498,l,ChfXodeV15bXlden15kg16LXpNeV15zXlCIDiAEBWiEiF9eh15XXlteV16fXmSDXotek15XXnNeUKgYIAhAAEAGSAQpjYXJfZGVhbGVy;mv:[[32.6047325,35.2965571],[32.6002438,35.2944236]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4" target="_blank">
                    <i class="fa-brands fa-google"></i>
                </a>
            </div>

        </section>
    </footer>
}