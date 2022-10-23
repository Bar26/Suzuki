import { createRef, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { json, useParams } from "react-router-dom";
import { setCurrCar } from '../store/CarActions'
import { BigCards } from "../cmps/BigCards";
import { MiniCards } from "../cmps/MiniCards";
import { ContactUs } from "../cmps/ContactUs"
import swiftTech from '../assets/files/swiftTech.pdf'
import swiftCatalog from '../assets/files/swiftCatalog.pdf'


export function CarDetails() {
    const { currCar } = useSelector((state) => state.carModule)
    const { carId } = useParams()
    const dispatch = useDispatch()
    const safetyRefs = useRef([])
    let currImgIdx = 0

    const techLinks = {
        "swiftTech": swiftTech  //////////////// NOT COMPLETE 
    }
    const catalogLinks = {
        "swiftCatalog": swiftCatalog  //////////////// NOT COMPLETE 
    }

    useEffect(() => {
        dispatch(setCurrCar(carId))
        window.scrollTo(0, 0)
    }, [])

    const onNextImg = (diff) => {
        safetyRefs.current[currImgIdx].style.opacity = 0
        currImgIdx += diff
        if (currImgIdx === safetyRefs.current.length) currImgIdx = 0
        if (currImgIdx === -1) currImgIdx = safetyRefs.current.length - 1
        safetyRefs.current[currImgIdx].style.opacity = 1
    }

    const addToRefs = (el) => {
        if (el && !safetyRefs.current.includes(el))
            safetyRefs.current.push(el)
    }

    const getLink = (linkName, isTech) => {
        if (isTech) return techLinks[linkName]
        else return catalogLinks[linkName]
    }




    if (!Object.keys(currCar).length) return
    return <section className="car-details-container">
        <img className="main-img" src={currCar.imgs.mainImg} alt="suzuki swift" />

        <section className="car-actions">
            <div className="price-container">
                <span className="p-one"> החל מ - </span>
                <span className="p-two">{currCar.price} ₪</span>
                <span className="p-three">בתוספת אגרת רישוי בסך <span>{currCar.licensing} ₪</span></span>
            </div>
            <div className="fund-options">
                <span>עד 100% מימון ועד 60 תשלומים</span>
                <span>(כולל אפשרות לפרעון 50% בסוף תקופה)</span>
                <button className="go-to-fund-calc">
                    למחשבון מימון
                </button>
            </div>
            <button className="phone-us">
                <i class="fa-solid fa-phone-volume"></i>
                <span>שיחה עם נציג</span>
            </button>
            <button className="go-to-contact-us btn">
                לתיאום פגישה
            </button>

        </section>

        <hr />

        <section className="info-imgs-container">


            <section className="main-info-img">

                <header className="title">
                    {currCar.infoImgs.main.text.title}
                </header>

                <p className="content">{currCar.infoImgs.main.text.content}</p>

                <img className="card-img" src={currCar.infoImgs.main.img} />

            </section>
            <hr />

            <div className="links-container">
                <a href={getLink(currCar.techLinkName, true)} target="_blank"  >מפרט טכני</a>
                <a href={getLink(currCar.catalogLinkName, false)} target="_blank" >קטלוג</a>
            </div>


            <MiniCards miniCards={currCar.infoImgs.miniCards} />
            <hr />

            <BigCards bigCards={currCar.infoImgs.bigCards} />
            <hr />



            {Object.keys(currCar.infoImgs.safety) && <section className="safety">

                <header className="title">
                    {currCar.infoImgs.safety.text.title}
                </header>

                <p className="content">{currCar.infoImgs.safety.text.content}</p>

                <div className="safety-imgs-container">
                    {currCar.infoImgs.safety.imgs.map((safetyImg, idx) =>
                        <img ref={addToRefs} src={safetyImg} alt="safety" />)}
                    <span className="arrow-right" onClick={() => onNextImg(1)}><i class="fa-solid fa-angle-right"></i></span>
                    <span className="arrow-left" onClick={() => onNextImg(-1)}><i class="fa-solid fa-angle-left"></i></span>
                </div>
            </section>}
            <hr />


            <video autoPlay muted preload="auto" loop="loop" src="https://res.cloudinary.com/debmbjvbh/video/upload/v1666376298/suzuki/swift/10_-_Meet_the_New_Hybrid_Suzuki_Swift_yhvceu.mp4" />
            <hr />
        </section>

        <img className="pollution-img" src={currCar.pollutionImg} />
        <ContactUs />




    </section >


}