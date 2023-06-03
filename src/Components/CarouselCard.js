import '../styles/styles.css';

export const CarouselCard= (props) => {
    return (
        <article className="card-comp">
            <div className="card-title">
                <h2>{props.skill.title}</h2>
                <span className="underline-2"></span>
            </div>
   
            <p className="rate">{props.skill.rating}</p>
            <p>{props.skill.exp} d'expériences</p>
            <p className="desc">{props.skill.description}</p>
        </article>
    )
}