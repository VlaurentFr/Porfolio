import '../styles/styles.css';

export const Colab= (props) => {
    return (
        <div>
            <section ref={props.refProp} className="container">
                  <span className="background-2"></span>
                  <div className="flex-wrapper center column">
                      <h1>Mes collaborations</h1>
                      <span className="underline-b"></span>
                  </div>
                  <div className="flex-wrapper wrap row evenly middle-container">
                      <img src="../Assets/univ.png" alt="Logo Université de la rochelle"/>
                      <img src="../Assets/iut.png" alt="Logo l'IUT Informatique de la rochelle"/>
                      <img src="../Assets/jpeuxpas.jpeg" alt="Logo jpeuxpasjaimusee.org"/>
                      <img src="../Assets/DRAC.png" alt="Logo de la DRAC"/>
                      <img src="../Assets/alienor.org.png" alt="Logo d'Alienor.org conseil des musées"/>
                  </div>
              </section>
              <section id="section-3" className="container">
                  <span className="background-2"></span>
                  <div className="flex-wrapper column">
                      <h1>Ce qu'ils disent :</h1>
                      <span className="underline-3"></span>
                    </div>  
                    <div className="flex-wrapper center flex column">
                      <article className="citations-card background">
                          <p>“Pendant une année assez compliquée, Covid oblige Valentin a su être responsable et à l’écoute des tâches qui lui ont été demandées dans un travail de réécriture du code frontend-backend en vue d’optimiser les applications mobiles de parcours de visites de musées, développées en partenariat avec l’IUT de La Rochelle. Je lui souhaite le meilleur dans le grand bain du développeur free lance.”</p>
                          <div className="column author">
                              <div className="column">
                                  <div className="row">
                                      <p className="bold">Vincent Lagardère -</p>
                                      <p style={{color: '#e86971'}}>Alienor.org, Conseil des musées</p>
                                  </div>
                                  <div className="row">
                                      <p>Depuis Malt.com, le </p>
                                      <p className="bold">07/09/2020</p>
                                  </div>
                              </div>
                          </div>
                          <svg className="image-section-bottom-left-little" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                          viewBox="0 0 595.3 841.9" style={{enableBackground:(0, 0, 595.3, 841.9)}} >
                              <title>Pti'Poulpe</title>
                              <path style={{fill:'#e86971'}} d="M522.3,576.1c-182.6-2.5,52.7-5-43.5-219.8c-3.6-8-0.1-17.4,7.9-21.1c0.7-0.3,1.4-0.6,2.1-0.8
                                  c11-3.1,15.9-21.1,3.3-59.7c-0.2-0.6-0.4-1.2-0.7-1.7C342.1-55.8,79.1,296.4,134.7,314.8c9.5,3.1,13.4,14.6,8.3,23.2
                                  c-33.5,56.5-58.4,148.6-6.4,206.9c5.9,6.6,5.4,16.7-1.1,22.6c-1,0.9-2.1,1.7-3.3,2.3c-50,26.5-103,25.3-60.9,74.3
                                  c0.8,0.9,1.7,1.7,2.7,2.5c23.9,17,55.7,21.2,80.4,17.6c9.5-1.4,18.3,5.8,18.3,15.4c0.3,47.8,105.7,49,114.8-43
                                  c-21.4,111.3,106,112.8,85.6-4c8.5,97.4,172.6,121.8,69.9-12.1c15.8,22.3,84.2,5.4,94.4-23.2c2.9-8.3-1.6-17.3-9.9-20.2
                                  C525.7,576.4,524.1,576.1,522.3,576.1z M199.9,537.5c-32.7-0.4-40.4-55.2,0.3-59.3c0.7-0.1,1.3-0.1,2-0.1
                                  c32.4,1.1,40.2,55.1-0.5,59.3C201.1,537.5,200.5,537.5,199.9,537.5z M408.2,548.6c-31.9-0.9-40.1-55.7,0.8-59.3
                                  c0.6,0,1.1-0.1,1.7-0.1c33.4,0.9,39.8,54.7-0.5,59.3C409.5,548.6,408.8,548.6,408.2,548.6z"/>
                          </svg>
                      </article>
                      </div>                
              </section>
        </div>
    )
}