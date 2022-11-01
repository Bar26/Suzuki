import { useEffect } from "react"
import { useSelector } from "react-redux"
import { CarPreview } from "../cmps/CarPreview"

export function CarListPage() {
    const { cars } = useSelector((state) => state.carModule)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return <section className="car-list-container">
        <img className="car-list-img" src="https://res.cloudinary.com/debmbjvbh/image/upload/v1666103410/suzuki/%D7%A1%D7%95%D7%96%D7%95%D7%A7%D7%99_%D7%A0%D7%91%D7%97%D7%A8%D7%AA_%D7%91%D7%90%D7%A0%D7%A8_g4qlmy.jpg" />
        {/* <div className="car-list-img" style={{ backgroundImage: `URL(https://res.cloudinary.com/debmbjvbh/image/upload/v1666103410/suzuki/%D7%A1%D7%95%D7%96%D7%95%D7%A7%D7%99_%D7%A0%D7%91%D7%97%D7%A8%D7%AA_%D7%91%D7%90%D7%A0%D7%A8_g4qlmy.jpg) `, aspectRatio: "1920 / 1080" }}> */}

        <div className="title">בחרו את הסוזוקי החדשה שלכם</div>
        <section className="cars-container">
            {cars.map(car => {
                return <div className="car-preview-wrapper">
                    <CarPreview car={car} key={car._id} />
                </div>
            })}

            {/* <div className="car-preview-wrapper"> <CarPreview car={{ nameEN: "suzuki s-cross Hybrid", imgs: { floatImg: "https://res.cloudinary.com/debmbjvbh/image/upload/v1665185701/suzuki/floating%20imgs/crossfloat2_lte29u.png" } }} /> </div>
            <div className="car-preview-wrapper"> <CarPreview car={{ nameEN: "suzuki Vitara Hybrid", imgs: { floatImg: "https://res.cloudinary.com/debmbjvbh/image/upload/v1665185697/suzuki/floating%20imgs/vitarafloat2_hotkqr.png" } }} /> </div>
            <div className="car-preview-wrapper"><CarPreview car={{ nameEN: "suzuki Ignis Hybrid", imgs: { floatImg: "https://res.cloudinary.com/debmbjvbh/image/upload/v1665185689/suzuki/floating%20imgs/ignisfloat2_aogymb.png" } }} /> </div>
            <div className="car-preview-wrapper"> <CarPreview car={{ nameEN: "suzuki Jimny Hybrid", imgs: { floatImg: "https://res.cloudinary.com/debmbjvbh/image/upload/v1665185679/suzuki/floating%20imgs/jimnyfloat2_frqwib.png" } }} /> </div> */}
        </section>


        <video autoPlay muted preload="auto" loop="loop" src="https://res.cloudinary.com/debmbjvbh/video/upload/v1666451755/suzuki/cars-video_e2xrhp.mp4" />




    </section>

}