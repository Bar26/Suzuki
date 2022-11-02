import { useEffect, useRef, useState } from "react"
import { CarSafetyDetails } from "../cmps/CarSafetyDetails"
import { CarList } from "../cmps/CarList"
import { ContactUs } from "../cmps/ContactUs"
// import { Link } from "react-router-dom"s
import { HashLink as Link } from 'react-router-hash-link';
import { useDispatch, useSelector } from "react-redux";
import { loadCars } from "../store/CarActions";


export function Home() {

    let [imgNum, setImgNum] = useState(0)
    let intervalId = useRef()
    const { cars } = useSelector((state) => state.carModule)
    const imgsRef = useRef([])
    let currImgIdx = 0
    const dispatch = useDispatch()


    useEffect(() => {
        play()
        return () => {
            stopPlay()
        }
    }, [])

    const OnTogglePlay = () => {
        if (intervalId.current) stopPlay()
        else play()

    }

    const play = () => {
        intervalId.current = setInterval(() => {
            imgsRef.current[currImgIdx].style.opacity = 0
            currImgIdx += 1
            if (currImgIdx === imgsRef.current.length) currImgIdx = 0
            imgsRef.current[currImgIdx].style.opacity = 1
        }, 5000)
    }

    const stopPlay = () => {
        clearInterval(intervalId.current)
        intervalId.current = null
    }

    const onChangeImg = (diff) => {
        imgsRef.current[currImgIdx].style.opacity = 0
        currImgIdx += diff
        if (currImgIdx === imgsRef.current.length) currImgIdx = 0
        if (currImgIdx === -1) currImgIdx = imgsRef.current.length - 1
        imgsRef.current[currImgIdx].style.opacity = 1

        stopPlay()
        play()
    }

    const addToRefs = (el) => {
        if (el && !imgsRef.current.includes(el))
            imgsRef.current.push(el)
    }





    if(!cars.length) return <h1>loading</h1>
    return <section className="home">
        <div className="img-container">
            {cars.map(car => {
                return <div ref={addToRefs} className="inner-img" style={{ backgroundImage: `URL(${car.imgs.homeImg}) `, aspectRatio: "2560 / 1440" }}>
                    <div className="call-to-action-btns">
                        <Link className="more-info" to={`/car/${car._id}`}> <button className="more-info">לפרטים נוספים</button></Link>
                        <Link to="#contactId"><button className="contact-us">תחזרו אליי</button></Link>
                    </div>
                </div>
            })}

            <span className="arrow-right" onClick={() => onChangeImg(1)}><i class="fa-solid fa-angle-right"></i></span>
            <span className="arrow-left" onClick={() => onChangeImg(-1)}><i class="fa-solid fa-angle-left"></i></span>
            <button className="toggle-play" onClick={OnTogglePlay}>
                <span>עצור ניגון</span>
                <i class="fa-solid fa-pause"></i>
            </button>
            <CarSafetyDetails />
            <hr />
        </div>

        <CarList />

        <hr />
        <div id="contactId">
            <ContactUs />
        </div>



    </section>
}