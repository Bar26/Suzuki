import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { loadCars, setCurrCar } from '../store/CarActions'
import { BigCards } from "../cmps/BigCards";
import { MiniCards } from "../cmps/MiniCards";
import { ContactUs } from "../cmps/ContactUs"
import swiftTech from '../assets/files/swiftTech.pdf'
import swiftCatalog from '../assets/files/swiftCatalog.pdf'
import crossTech from '../assets/files/crossTech.pdf'
import crossCatalog from '../assets/files/crossCatalog.pdf'
import ignisTech from '../assets/files/ignistech.pdf'
import ignisCatalog from '../assets/files/ignisCatalog.pdf'
import vitaraTech from '../assets/files/vitaraTech.pdf'
import vitaraCatalog from '../assets/files/vitaraCatalog.pdf'
import jimnyTech from '../assets/files/jimnyTech.pdf'
import { HashLink as Link } from 'react-router-hash-link';
import { SafetyIcons } from "../cmps/SafetyIcons";
import { Loader } from "../cmps/Loader";
import { CarActions } from "../cmps/CarActions";



export function CarDetails() {
    const { currCar } = useSelector((state) => state.carModule)
    const { carId } = useParams()
    const dispatch = useDispatch()
    const safetyRefs = useRef([])
    let currImgIdx = 0
    const techLinks = {
        "swiftTech": swiftTech,
        "crossTech": crossTech,
        "vitaraTech": vitaraTech,
        "ignisTech": ignisTech,
        "jimnyTech": jimnyTech
    }

    const catalogLinks = {
        "swiftCatalog": swiftCatalog,
        "crossCatalog": crossCatalog,
        "vitaraCatalog": vitaraCatalog,
        "ignisCatalog": ignisCatalog
    }

    const [isVisible, setIsVisible] = useState(false)
    const carActionsRef = useRef(null)
    const carActionsFloatRef = useRef()
    const [isCarActionClosed, setIsCarActionClosed] = useState(false)

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }

    useEffect(() => {
        const observer = new IntersectionObserver(cbFunction, options)
        if (carActionsRef.current) observer.observe(carActionsRef.current)

        return () => {
            if (carActionsRef.current) observer.unobserve(carActionsRef.current)
        }
    }, [carActionsRef, options])


    useEffect(() => {
        dispatch(setCurrCar(carId))
        window.scrollTo(0, 0)
    }, [])

    const cbFunction = (entries) => {
        const [entry] = entries
        if(!isCarActionClosed) setIsVisible(entry.isIntersecting)
    }

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

    const onCloseFloat = () => {
        setIsCarActionClosed(true)
        setIsVisible(true)
    }






    if (!Object.keys(currCar).length) return <Loader />
    return <section className="car-details-container">
        <img className="main-img" src={currCar.imgs.mainImg} alt="suzuki" />

        <section ref={carActionsRef} className="car-actions-wrapper">
            <CarActions />
        </section>
        {/* <section ref={carActionsRef} className="car-actions" > */}
        {/* <div className="price-container">
                <span className="p-one"> החל מ - </span>
                <span className="p-two">{currCar.price} ₪</span>
                <span className="p-three">
                    <span>תוספת אגרת רישוי  </span>
                    <span className="price">בסך {currCar.licensing} ₪ </span></span>
            </div> */}
        {/* <div className="fund-options">
                <span>עד 100% מימון ועד 60 תשלומים</span>
                <span>(כולל אפשרות לפרעון 50% בסוף תקופה)</span> */}
        {/* <button className="go-to-fund-calc">
                    למחשבון מימון
                </button> */}
        {/* </div> */}
        {/* <div className="call-to-action-btns">

                <a className="phone-link" href="tel://+972509225509">
                    <button className="phone-us">

                        <i class="fa-solid fa-phone-volume"></i>
                        <span>
                            שיחה עם נציג
                        </span>
                    </button>
                </a>

                <Link className="inside-link" to="#contactId">
                    <button className="go-to-contact-us btn">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <span>לתיאום פגישה</span>
                    </button></Link>

            </div> */}

        {/* </section> */}

        <hr />

        <section className="info-imgs-container">


            <section id="location-id" className="main-info-img">

                <header className="title">
                    {currCar.infoImgs.main.text.title}
                </header>

                <p className="content">{currCar.infoImgs.main.text.content}</p>

                <img className="card-img" src={currCar.infoImgs.main.img} alt="car" />

            </section>
            <hr />

            <div className="links-container">
                <a href={getLink(currCar.techLinkName, true)} target="_blank"  >מפרט טכני</a>
                {currCar.catalogLinkName && <a href={getLink(currCar.catalogLinkName, false)} target="_blank" >קטלוג</a>}
            </div>

            <MiniCards miniCards={currCar.infoImgs.miniCards} />
            <hr />
            <BigCards bigCards={currCar.infoImgs.bigCards} />
            <hr />




            {currCar.infoImgs.safety && <section className="safety">

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
            {currCar.infoImgs.safety && <hr />}

            {currCar.infoImgs.safetyIcons && <SafetyIcons safetyIcons={currCar.infoImgs.safetyIcons} />}
            {currCar.infoImgs.safetyIcons && <hr />}


            <video autoPlay muted preload="auto" loop="loop" src={currCar.video} />
            <hr />
            <img className="pollution-img" src={currCar.pollutionImg} />
        </section>


        <hr className="last-hr" />
        <div id="contactId">

            <ContactUs />
        </div>

        {!isVisible && <section ref={carActionsFloatRef} className="car-actions-float-container">
            <CarActions isFloat="true" onCloseFloat={onCloseFloat} />
        </section>
        }








    </section >


}