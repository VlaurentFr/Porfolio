import '../styles/styles.css';

export const CarouselCard= (props) => {
    return (
        <article className={props.index%2 === 0 ? "card-comp" : "cardSecondary-comp"}>
            <div className="card-title">
                <h2>{props.skill.title}</h2>
                <span className="underline-2"></span>
            </div>
            { !props.isClick && <div>
                <p className="rate">{props.skill.rating}</p>
                <p>{props.skill.exp} d'expériences</p>
                <p onClick={() => props.onClick()} className={props.index%2 === 0 ? "buttonMorePrimary" : "buttonMoreSecondary"}>voir plus</p>
            </div>}
            { props.isClick && <div>
                <p className="desc">{props.skill.description}</p>
            </div>}
        </article>
    )
}