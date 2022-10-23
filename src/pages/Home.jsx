import { useEffect, useRef, useState } from "react"
import { CarSafetyDetails } from "../cmps/CarSafetyDetails"
import { CarList } from "../cmps/CarList"
import { ContactUs } from "../cmps/ContactUs"

export function Home() {

    let [imgNum, setImgNum] = useState(0)
    let intervalId = useRef()

    // const imgs = [
    //     "https://res.cloudinary.com/debmbjvbh/image/upload/v1664745148/suzuki/Cross/s_cross_2_z6etlo.jpg",
    //     "https://res.cloudinary.com/debmbjvbh/image/upload/v1664805687/suzuki/Vitara/vitara_3_oq226r.jpg",
    //     "https://res.cloudinary.com/debmbjvbh/image/upload/v1664703407/suzuki/Jimny/jimny1_nxxtoc.webp",
    //     "https://res.cloudinary.com/debmbjvbh/image/upload/v1663864224/suzuki/swift/swiftForDesign_thujpd.jpg",
    //     "https://res.cloudinary.com/debmbjvbh/image/upload/v1664806897/suzuki/Ignis/7_rmzzsi.jpg"
    // ]

    const imgs = [
        {
            img: "https://res.cloudinary.com/debmbjvbh/image/upload/v1664745148/suzuki/Cross/s_cross_2_z6etlo.jpg",
            a_r: "1920 / 1080"
        },
        {
            img: "https://res.cloudinary.com/debmbjvbh/image/upload/v1664805687/suzuki/Vitara/vitara_3_oq226r.jpg",
            a_r: "1918 / 1107"
        },
        {
            img: "https://res.cloudinary.com/debmbjvbh/image/upload/v1664703407/suzuki/Jimny/jimny1_nxxtoc.webp",
            a_r: "1226 / 622"
        },
        {
            img: "https://res.cloudinary.com/debmbjvbh/image/upload/v1663864224/suzuki/swift/swiftForDesign_thujpd.jpg",
            a_r: "1270 / 691"
        },
        {
            img: "https://res.cloudinary.com/debmbjvbh/image/upload/v1664806897/suzuki/Ignis/7_rmzzsi.jpg",
            a_r: "1270 / 691"
        }
    ]
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
            setImgNum((imgNum) => {
                if (imgNum === imgs.length - 1) return 0
                else return imgNum + 1
            })
        }, 5000)
    }

    const stopPlay = () => {
        clearInterval(intervalId.current)
        intervalId.current = null
    }

    const onChangeImg = (diff) => {
        setImgNum((imgNum) => {
            if (imgNum === imgs.length - 1 && diff) return 0
            else if (imgNum === 0 && !diff) return imgs.length - 1
            else return imgNum + diff
        })

        stopPlay()
        play()
    }






    return <section className="home">
        <div className="img-container">
            {/* <img className="background-img" src={imgs[imgNum]} />
                <img className="inner-img" src={imgs[imgNum]} /> */}
            {/* <div className="background-img" style={{ backgroundImage: `URL(https://res.cloudinary.com/debmbjvbh/image/upload/v1664745148/suzuki/Cross/s_cross_2_z6etlo.jpg) `, aspectRatio: "1920 / 1080" }}> */}
            {/* <div className="background-img" style={{ backgroundImage: `URL(${imgs[imgNum].img}) `, aspectRatio: imgs[imgNum].a_r }}> */}
            {/* <div className="background-img" style={{ backgroundImage: `URL(${imgs[imgNum].img}) `, aspectRatio: imgs[imgNum].a_r }}>

            </div> */}
            <div className="inner-img" style={{ backgroundImage: `URL(${imgs[imgNum].img}) `, aspectRatio: imgs[imgNum].a_r }}>
                <div className="call-to-action-btns">
                    <button className="more-info">לפרטים נוספים</button>
                    <button className="contact-us">תחזרו אליי</button>
                </div>
            </div>
            <span className="arrow-right" onClick={() => onChangeImg(1)}><i class="fa-solid fa-angle-right"></i></span>
            <span className="arrow-left" onClick={() => onChangeImg(-1)}><i class="fa-solid fa-angle-left"></i></span>
            <button className="toggle-play" onClick={OnTogglePlay}>עצור ניגון</button>
            <CarSafetyDetails />
            <hr />
        </div>

        <CarList />

        <hr />
        <ContactUs />


    </section>
}