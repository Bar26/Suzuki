export function BigCards({ bigCards }) {

    return <section className="big-cards-container">
        {bigCards.map(card => <div className="big-card-container">
            <header className="title">
                {card.text.title}
            </header>

            <p className="content">{card.text.content}</p>

            {card.img && <img className="card-img" src={card.img} />}

            {card.imgs.length &&
                <section className="bigPlusSmall">
                    <img className="card-img" src={card.imgs[0]} />
                    <div className="small-imgs-container">
                          {card.imgs.map((_img, idx) => {
                        if (idx !== 0) return <img className="small-img" src={_img} />
                    })}
                    </div>
                  
                </section>
            }


        </div>)}




    </section>

}