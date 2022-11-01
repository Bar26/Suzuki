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

                {/* <CarPreview car={{ nameEN: "suzuki s-cross Hybrid", imgs: { floatImg: "https://res.cloudinary.com/debmbjvbh/image/upload/v1665185701/suzuki/floating%20imgs/crossfloat2_lte29u.png" } }} />
                <CarPreview car={{ nameEN: "suzuki Vitara Hybrid", imgs: { floatImg: "https://res.cloudinary.com/debmbjvbh/image/upload/v1665185697/suzuki/floating%20imgs/vitarafloat2_hotkqr.png" } }} />
                <CarPreview car={{ nameEN: "suzuki Ignis Hybrid", imgs: { floatImg: "https://res.cloudinary.com/debmbjvbh/image/upload/v1665185689/suzuki/floating%20imgs/ignisfloat2_aogymb.png" } }} />
                <CarPreview car={{ nameEN: "suzuki Jimny Hybrid", imgs: { floatImg: "https://res.cloudinary.com/debmbjvbh/image/upload/v1665185679/suzuki/floating%20imgs/jimnyfloat2_frqwib.png" } }} /> */}
            </div>
            <span className="move-to-car-list">למידע נוסף ניתן לעבור לעמוד <Link to="/cars">דגמים</Link> או להשאיר פרטים ונחזור אליכם</span>


        </section>



    )

}