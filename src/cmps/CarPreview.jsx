import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"

export function CarPreview({ car }) {
    const location = useLocation()
    const isOnCarsPage = location.pathname === "/cars"

    return (
        <section className="car-preview">
            <div className="right">
                <img className="car-img" src={car.imgs.floatImg} />
                <h3 className="car-name">{car.nameEN}</h3>
            </div>
            {isOnCarsPage &&
                <section className="left">
                    <div className="price-container">
                        <span className="p-one"> החל מ - </span>
                        <span className="p-two">{car.price} ₪</span>
                        <span className="p-three">בתוספת אגרת רישוי בסך <span>{car.licensing} ₪</span></span>
                        
                    </div>
                    <button className="btn more-info">למידע נוסף</button>
                </section>}

        </section>
    )
}