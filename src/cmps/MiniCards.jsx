import { CarDetails } from "../pages/CarDetails"

export function MiniCards({miniCards}){

    return <section className="mini-cards-container">
            {miniCards.map(card=>
            <article className="mini-card-container">
                <img className="mini-img" src={card.img} alt="card"/>
                <header className="title">{card.text.title}</header>
                <p className="content">{card.text.content}</p>
            </article>)}

    </section>

}