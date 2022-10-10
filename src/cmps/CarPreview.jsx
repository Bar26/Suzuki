export function CarPreview({car}){
    
    return (
        <section className="car-preview">
            {/* <div className="car-img-container" style={{ backgroundImage: `URL(${car.imgs.floatImg}) `, aspectRatio: imgs[imgNum].a_r }}></div>
             */}
             <img className="car-img" src={car.imgs.floatImg}/>
            <h3 className="car-name">{car.nameEN}</h3>

        </section>
    )
}