import { ContactUs } from '../cmps/ContactUs'
import { Loader } from '../cmps/Loader'

export function ContactUsPage() {

    return <section className="contact-us-page-container">
        <hr />
        <header className="contact-header">
            <h1 className="title">דברו איתנו</h1>
            <h1 className="content">מחפשים את הסוזוקי החדשה שלכם? מעוניינים לבוא לבקר? אנחנו נשמח לעזור בכל פנייה</h1>
        </header>

        <section className="contact-form-wrapper">
            <setion className="contact-opt">

                <a className="whatsapp-link" href="https://wa.me/97246421771?text=%20אשמח %20לפרטים %20נוספים" target="_blank">
                    <div className='whatsapp-opt'>
                        <i class="fa-brands fa-whatsapp"></i>
                        <span>שוחח עם נציג</span>
                    </div>
                </a>

                <a className="phone-link" href="tel://+97246421771">
                    <div className="phone-opt">
                        <i class="fa-solid fa-phone-volume"></i>
                        <span>04-6421771</span>
                    </div>
                </a>

                <div>
                    <div className="adress-opt">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>עפולה, רח' המלאכה 28</span>
                    </div>
                </div>

            </setion>

            <ContactUs />
        </section>

    </section>
}
