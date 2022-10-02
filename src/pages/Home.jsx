import { useState } from "react"

export function Home() {

    const [imgNum,setImgNum] = useState(0)

    const imgs = [
        "https://res.cloudinary.com/debmbjvbh/image/upload/v1664703326/suzuki/Cross/cross3_hmak7n.webp",
        "https://res.cloudinary.com/debmbjvbh/image/upload/v1664703636/suzuki/preview%20front%20page%20photos/res-console.cloudinary_yq0kba.jpg",
        "https://res.cloudinary.com/debmbjvbh/image/upload/v1664703691/suzuki/preview%20front%20page%20photos/res-console.cloudinary_khqwwf.jpg",
        "https://res.cloudinary.com/debmbjvbh/image/upload/v1664703661/suzuki/preview%20front%20page%20photos/res-console.cloudinary_jtmltk.jpg",
        "https://res.cloudinary.com/debmbjvbh/image/upload/v1664703723/suzuki/preview%20front%20page%20photos/res-console.cloudinary_x92rjr.jpg"
    ]

    return <section className="home">
        <section className="rotating-images-container">
            <div className="img-container">   
                <img src={imgs[imgNum]}/>
            </div>

        </section>
    </section>
}