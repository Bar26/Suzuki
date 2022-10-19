import { useSelector } from "react-redux"

export function ContactUs() {
    const { cars } = useSelector((state) => state.carModule)

    const onin=(inputId)=>{
        console.log('jjjjjjjjjjjjjjjjjjjjjjjjjj');
        const input = document.getElementById(inputId);
        console.log(input.validity);
      
          input.setCustomValidity('You gotta fill this out, yo!');

      
    }


    return <section className="contact-us-container" id="contact">
        <header className="contact-us-header">
            <h1 className="contact-us-title">צור קשר</h1>
            <span className="call-now">רוצים לדבר איתנו כבר עכשיו? חייגו 04-6421771</span>
        </header>
        <form className="contact-us-form">

            <input className="first-name" type="text" placeholder="*שם פרטי" required />
            <input className="last-name" type="text" placeholder="*שם משפחה" required />
            <input id="1" className="mail" type="email" placeholder="אימייל" required />
            <input className="phone" type="tel" placeholder="*טלפון" required />
            <select className="model" placeholder="דגם">
                <option value="null">דגם</option>
                {cars.map(car => <option value={car.name}>{car.name}</option>)}
            </select>
            <textarea className="message" placeholder="תרצו להוסיף הודעה?" />
            <button className="btn btn-submit">
                שלחו ונחזור אליך בהקדם
            </button>

        </form>
    </section>
}