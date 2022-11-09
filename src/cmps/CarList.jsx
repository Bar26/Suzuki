import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CarPreview } from "./CarPreview";


export function CarList() {
    const { cars } = useSelector((state) => state.carModule)


    return (
        <section className="car-list">
            <header className="title models-header">הכירו את דגמי סוזוקי</header>

            <div className="car-list-content">
                {cars.map(car => <CarPreview car={car} key={car._id} />)}
            </div>
            <span className="move-to-car-list">למידע נוסף ניתן לעבור לעמוד <Link to="/cars">דגמים</Link> או להשאיר פרטים ונחזור אליכם</span>


        </section>



    )

}