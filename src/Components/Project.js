import '../styles/styles.css';

export const ProjectSection= (props) => {
    return (
        <section ref={props.refProp} className="container">
            <span className="background-2"></span>
            <div className="flex-wrapper center column">
                <h1>Mes Projets</h1>
                <span className="underline-b"></span>
            </div>
            <div className="flex-wrapper row evenly middle-container">
                <div className="column app">
                <img src="../Assets/VM.png" alt="Logo Université de la rochelle"/>
                <p>Visite Musée</p>
                </div>
                <div className="column app">
                <img src="../Assets/VP.png" alt="Logo Université de la rochelle"/>
                <p>Visite Patrimoine</p>
                </div>
                <div className="column app">
                <img src="../Assets/1024.png" alt="Logo Université de la rochelle"/>
                <p>Mon Panier Connecté</p>
                </div>
            </div>
            <div className="flex-wrapper center">
                <p>J’ai également participé à la création de divers prototypes tel qu’un jeu d’enquêtes pédagogiques pour les classes scolaires en visite dans les musées</p>
            </div>                    
        </section>
    )
}