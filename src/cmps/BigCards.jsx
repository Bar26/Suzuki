export function BigCards({ bigCards }) {

    return <section className="big-cards-container">
        {bigCards.map(card => <div className="big-card-container">
            <header className="title">
                {card.big.text.title}
            </header>

            <p className="content">{card.big.text.content}</p>

            {/* {card.img && <img className="card-img" src={card.img} />} */}

            {/* {card.imgs.length &&*/}
            <section className="bigPlusSmall">

                <img className="big-img" src={card.big.img} />
                <div className="small-imgs-container">

                    {card.mini && card.mini.map(mini =>
                        <article className="mini-card-container">
                            <img className="mini-img" src={mini.img} alt="card" />
                            {mini.text?.title && <header className="title-small">{mini.text.title}</header>}
                            {mini.text?.content && <p className="content">{mini.text.content}</p>}
                        </article>

                    )}
                </div>
            </section>
            < hr />
        </div>
        )
        }
    </section>

    {/* <section className="bigPlusSmall">
    <img className="card-img" src={card.imgs[0]} />
    <div className="small-imgs-container">
        {card.imgs.map((_img, idx) => {
            if (idx !== 0) return <img className="small-img" src={_img} />
        })}
    </div>

</section> */}
    {/* } */ }
}