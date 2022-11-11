import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { setCurrCar } from '../store/CarActions'

export function CarPreview({ car }) {
    const location = useLocation()
    const isOnCarsPage = location.pathname === "/cars"
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const onChooseCar = async () => {
        await dispatch(setCurrCar(car._id))
        navigate(`/cars/${car._id}`)
    }

    return (
        <section className="car-preview">
            <div className="right" onClick={onChooseCar}>
                <img className="car-img" src={car.imgs.floatImg} alt="car" />
                <h3 className="car-name">{car.nameEN}</h3>
            </div>
            {isOnCarsPage &&
                <section className="left">
                    <div className="price-container">
                        <span className="p-one"> החל מ - </span>
                        <span className="p-two">{car.price} ₪</span>
                        <span className="p-three">בתוספת אגרת רישוי בסך <span>{car.licensing} ₪</span></span>

                    </div>
                    <button onClick={onChooseCar} className="btn more-info">למידע נוסף</button>
                </section>}

        </section>
    )
}