export function CarSafetyDetails({safety, pollution}) {


    const getPollutionColor = (num) => {
        switch (+num) {
            case 1:
                return "#1f5747"

            case 2:
                return "#0e8154"

            case 3:
                return "#088350"

            case 4:
                return "#169656"

            case 5:
                return "#2fac57"
            case 6:
                return "#62bc54"
            case 7:
                return "#b0d345"
            case 8:
                return "#f9ed34"
            case 9:
                return "#f7d226"
            case 10:
                return "#f6ac2c"
            case 11:
                return "#ed8a2c"
            case 12:
                return "#f26337"
            case 13:
                return "#d73b2d"
            case 14:
                return "#bd2734"
            case 15:
                return "#af2939"

            default:
                return

        }
    }
    const getSafetyColor = (num) => {
        switch (+num) {
            case 3:
                return "#23b989"

            case 4:
                return "#30889b"

            case 5:
                return "#2888c3"

            case 6:
                return "#1b6bbc"

            case 7:
                return "#446fb5"

            case 8:
                return "#425faf"

            default:
                return

        }
    }


    return (
        <section className="safety-details">
            <div className="pollution">
                <span className="pollution-title">דרגת זיהום אוויר</span>
                {pollution.map(poll=>{
                    return   <span className="pollution-info" style={{ backgroundColor: getPollutionColor(poll) }}>{poll}</span>
                })}
              
            </div>
            <div className="safety">
                <span className="safety-title">רמת בטיחות</span>
                <span className="safety-info" style={{ backgroundColor: getSafetyColor(safety) }}>{safety}</span>
            </div>
     
        </section>
    )


}