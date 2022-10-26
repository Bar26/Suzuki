import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import { carService } from "../services/carService"
import { clientService } from '../services/clientService'
import { PopUpMsg } from "./PopUpMsg"

export function ContactUs() {
    const { cars } = useSelector((state) => state.carModule)
    const formRef = useRef()
    const [clientInfo, setClientInfo] = useState({
        "first-name": "",
        "last-name": "",
        "email": "",
        "phone": "",
        "model": "",
        "text": ""
    })
    const [isShowMsg, setIsShowMsg] = useState(false)
    const popUpRef = useRef()

    const handleChange = (ev) => {
        let field = ev.target.name
        let value = ev.target.value
        setClientInfo({ ...clientInfo, [field]: value })
    }

    const onAddClient = (ev) => {
        ev.preventDefault()
        if (!clientInfo.model) delete clientInfo.model
        if (!clientInfo.text) delete clientInfo.text
        clientService.addClient(clientInfo)
        setClientInfo({
            "first-name": "",
            "last-name": "",
            "email": "",
            "phone": "",
            "model": "",
            "text": ""
        })
        formRef.current.reset()
        showMsg()

        //TO-DO - ADD NOTIFICATION- SUCCESS
    }

    const showMsg = () => {
        popUpRef.current.classList.add('show')
        setTimeout(() => {
            popUpRef.current.classList.remove('show')
        }, 3000);
    }


    return <section  className="contact-us-container" id="contact">
        <header className="contact-us-header">
            <h1 className="contact-us-title">צור קשר</h1>
            <span className="call-now">רוצים לדבר איתנו כבר עכשיו? חייגו 04-6421771</span>
        </header>
        <form ref={formRef} onSubmit={onAddClient} onChange={handleChange} className="contact-us-form">

            <input name="first-name" className="first-name" type="text" placeholder="*שם פרטי" required />
            <input name="last-name" className="last-name" type="text" placeholder="*שם משפחה" required />
            <input name="email" id="1" className="mail" type="email" placeholder="*אימייל" required />
            <input name="phone" className="phone" type="tel" placeholder="*טלפון (055-5555555)" required
                pattern="[0-9]{3}-[0-9]{7}" />
            <select name="model" className="model" placeholder="דגם">
                <option value="null">דגם</option>
                {cars.map(car => <option value={car.name}>{car.name}</option>)}
            </select>
            <textarea name="text" className="message" placeholder="תרצו להוסיף הודעה?" />
            <button className="btn btn-submit">
                שלחו ונחזור אליך בהקדם
            </button>

        </form>
        <div ref={popUpRef} className="pop-up-container">
            <PopUpMsg txt={'פנייתך נשלחה בהצלחה'} />
        </div>

    </section>
}