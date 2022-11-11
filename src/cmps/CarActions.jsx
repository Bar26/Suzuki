import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function CarActions({ isFloat, onCloseFloat }) {

    const { currCar } = useSelector((state) => state.carModule)

    return <section className="car-actions" >
        {isFloat && <span onClick={onCloseFloat} className="close-float-car-actions"><i className="fa-solid fa-xmark"></i></span>}
        {isFloat && <img className="mini-float-img" src={currCar.imgs.floatImg} alt="car" />}
        <div className="price-container">
            <span className="p-one"> החל מ - </span>
            <span className="p-two">{currCar.price} ₪</span>
            <span className="p-three">
                <span>תוספת אגרת רישוי  </span>
                <span className="price">בסך {currCar.licensing} ₪ </span></span>
        </div>
        <div className="fund-options">
            <span>עד 100% מימון ועד 60 תשלומים</span>
            <span>(כולל אפשרות לפרעון 50% בסוף תקופה)</span>
            {/* <button className="go-to-fund-calc">
            למחשבון מימון
        </button> */}
        </div>
        <div className="call-to-action-btns">

            <a className="phone-link" href="tel://+972509225509">
                <button className="phone-us">

                    <i class="fa-solid fa-phone-volume"></i>
                    <span>
                        שיחה עם נציג
                    </span>
                </button>
            </a>

            <Link className="inside-link" to="/contact-us">
                <button className="go-to-contact-us btn">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <span>לתיאום פגישה</span>
                </button></Link>

        </div>


    </section>
}