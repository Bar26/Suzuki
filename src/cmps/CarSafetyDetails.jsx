export function CarSafetyDetails(safety, pollution) {


    const getPollutionColor = (num) => {
        switch (num) {
            case 1:
                return "#1f5747"

            case 2:
                return "#0e8154"

            case 3:
                return "#1f5747"

            case 4:
                return "#169656"

            case 5:
                return "#2fac57"

            default:
                return

        }
    }
    const getSafetyColor = (num) => {
        switch (num) {
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
                <span className="pollution-info" style={{ backgroundColor: getPollutionColor(4) }}>{3}</span>
            </div>
            <div className="safety">
                <span className="safety-title">רמת בטיחות</span>
                <span className="safety-info" style={{ backgroundColor: getSafetyColor(3) }}>{3}</span>
            </div>
     
        </section>
    )


}