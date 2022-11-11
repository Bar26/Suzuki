import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { clientService } from '../services/clientService'
import { PopUpMsg } from "./PopUpMsg"
import emailjs from '@emailjs/browser';
import { useLocation } from "react-router-dom"

export function ContactUs() {
    const { cars } = useSelector((state) => state.carModule)
    const formRef = useRef()
    const location = useLocation()
    const [clientInfo, setClientInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        model: "",
        text: "",
        userConsent:""
    })
    const popUpRef = useRef()


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const handleChange = (ev) => {
        let field = ev.target.name
        let value = ev.target.value
        if (ev.target.type === "checkbox") value = ev.target.checked
        setClientInfo({ ...clientInfo, [field]: value })
    }

    const onAddClient = (ev) => {
        ev.preventDefault()
        sendEmail()
        if (!clientInfo.model) delete clientInfo.model
        if (!clientInfo.text) delete clientInfo.text
        clientService.addClient(clientInfo)
        setClientInfo({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            model: "",
            text: "",
            userConsent:""
        })
        formRef.current.reset()
        showMsg()

    }

    const showMsg = () => {
        popUpRef.current.classList.add('show')
        setTimeout(() => {
            popUpRef.current.classList.remove('show')
        }, 3000);
    }

    const sendEmail = (ev) => {
        emailjs.sendForm('service_f4t86wb', 'template_8rgc6g1', formRef.current, 'dy8NqYv9v5dRtJDUI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return <section className="contact-us-container" id="contact">
        <header className="contact-us-header">
            <h1 className="contact-us-title">צור קשר</h1>
            {location.pathname !== '/contact-us' && <div className="call-now"  >
                <span >רוצים לדבר איתנו כבר עכשיו? חייגו </span>
                <a className="phone-link" href="tel://+97246421771"> 04-6421771 </a>
            </div>}
        </header>
        <form ref={formRef} onSubmit={onAddClient} onChange={handleChange} className="contact-us-form">

            <input name="firstName" className="first-name" type="text" placeholder="*שם פרטי" required />
            <input name="lastName" className="last-name" type="text" placeholder="*שם משפחה" required />
            <input name="email" id="1" className="mail" type="email" placeholder="*אימייל" required />
            <input name="phone" className="phone" type="tel" placeholder="*טלפון (0555555555)" required
                pattern="[0-9]{10}" />
            <select name="model" className="model" placeholder="דגם">
                <option value="null">דגם</option>
                {cars.map(car => <option value={car.name}>{car.name}</option>)}
            </select>
            <textarea name="text" className="message" placeholder="תרצו להוסיף הודעה?" />
            <label className="mail-validate-label">
                <input className="mail-validate" type="checkbox" name="userConsent" defaultChecked="true" />
                <span>מאשר\ת קבלת פניות שיווקיות, מידע על מבצעים והטבות לרבות דרך דוא"ל\ ווטסאפ</span>
            </label>
            <button className="btn btn-submit">
                שלחו ונחזור אליך בהקדם
            </button>

        </form>
        <div ref={popUpRef} className="pop-up-container">
            <PopUpMsg txt={'פנייתך נשלחה בהצלחה'} />
        </div>


    </section>
}