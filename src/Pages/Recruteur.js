import '../styles/styles.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SKILLS from "../Mock/skills.json"
import JOBS from '../Mock/jobs.json'
import STUDIES from '../Mock/studies.json'
import { CarouselCard } from '../Components/CarouselCard';
import { useState } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { CSSTransition, } from 'react-transition-group';
import slideTransition from "../Transitions/slide.module.css";
import { ProjectSection } from '../Components/Project';
import { Colab } from '../Components/Colab';

export const Recruteur= (props) =>{
    const [skill, setSkill]= useState(null)
    const [isCompOpen, setCompOpen]= useState(false)
    const birth = new Date('March 07, 1999');
    const currentDate   = new Date()
    const age = currentDate.getFullYear() - birth.getFullYear()
    return ( 
          <div>
              <section ref={props.refProp1} className="container">
                  <span className="background-2"></span>
                  <div className="flex-wrapper column">
                      <h1>Qui suis-je ?</h1>
                      <span className="underline"></span>
                  </div>
                  <div className="card-wrapper">
                      <article className="card2" data-label={age+ " ans, Rochefort 17300"}>
                          <div className="flex-wrapper avatar-container">
                        <img className="avatar" src="../Portfolio/Assets/me.png" alt="Profil Picture"/>
                        <h2>Je m’appelle Valentin LAURENT, je suis développeur Freelance en Web et mobile.</h2>
                        </div>
                          <p>
                              Tout droit sorti de licence professionnelle développement mobile après un DUT informatique de 2 ans, je me suis lancé dans le monde des freelances. Je vous propose aujourd'hui mes services afin de vous aider dans la réalisation de vos idées d'applications en Web et mobile. De par mon expérience d'alternant et de professionnel, j'ai pu toucher à une multitude de technologies et de produits différents m'apportant de nombreuses connaissances utiles dans la production de vos idées ! J'accompagne à cette tâche depuis déjà plus d'un an, vous conseillant sur vos besoins et envies.
                        </p>
                    </article>
                  </div>
                  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                  <iframe class="image-section-bottom-right" src="https://embed.lottiefiles.com/animation/41675"></iframe>
              </section>
              {/* PROJET */}
              <ProjectSection refProp={props.refProp2}></ProjectSection>
              {/* COLAB */}
              <Colab refProp={props.refProp3}></Colab>
              {/* Compétences */}
              <section id="section-4" ref={props.refProp4} className="container-comp background">
                  <div className="flex-wrapper column center">
                      <h1>Mes compétences</h1>
                      <span className="underline"></span>
                  </div>
                  <div>
                  {/* <Carousel className="slider" autoPlay={true} interval={7000}showStatus={false} emulateTouch={false} centerMode={true} infiniteLoop={true} centerSlidePercentage={25}>
                    {SKILLS.map((item,i) => <CarouselCard onClick={()=> setSkill(i)} skill={item} index={i} isClick={skill == i}></CarouselCard>)}
                  </Carousel> */}
                  <div className='card-wrapper background-secondary'>
                      {SKILLS.map((item,i) => {
                          if(i < 6)
                          return(<CarouselCard onClick={()=> setSkill(i)} skill={item} index={i} isClick={skill == i}></CarouselCard>)
                      })}
                        
                        <CSSTransition
                        in={isCompOpen}
                        timeout={500}
                        classNames={slideTransition}
                        unmountOnExit
                        >
                            <div className='card-wrapper background-secondary' >
                                {isCompOpen && SKILLS.map((item,i) => {
                                    if( i >=6 )
                                    return(
                                    <CarouselCard onClick={()=> setSkill(i)} skill={item} index={i} isClick={skill == i}></CarouselCard>)
                                })}
                                <div className="center" style={{width: '100%'}}>
                                    <div style={{display: isCompOpen? 'flex':'none'}} className="button-open" onClick={() => {setCompOpen(!isCompOpen); props.refProp4.current.scrollIntoView({block: "start"})}}>
                                        <i class="gg-arrow-up"></i> 
                                    </div>
                                </div>
                            </div> 
                        </CSSTransition>
                        {!isCompOpen && <div className="center" style={{width: '100%'}}>
                            <div className="button-open" onClick={() => {setCompOpen(!isCompOpen)}}>
                                <i class="gg-arrow-down"></i>
                            </div></div>}
                        
                  </div>
                </div>
              </section>
              {/* Compétences */}
              <section id="section-4" ref={props.refProp4a} className="container background">
                  <div className="flex-wrapper column center">
                      <h1>Mes expériences</h1>
                      <span className="underline"></span>
                  </div>
                  <Timeline lineColor={'#ddd'}>
                      {JOBS.map((job, i) => <TimelineItem
                                dateInnerStyle={{ backgroundColor: i%2 === 0 ? '#e86971' : '#2C3545' }}
                                key={i}
                                dateText={job.date}
                                style={{ color: i%2 === 0 ? '#e86971' : '#2C3545'}}
                            >
                                <h3 style={{ color: '#e86971'}}>{job.title}</h3>
                                <h4>{job.subtitle}</h4>
                                <p>{job.description}</p>
                            </TimelineItem>
                      )}
                  </Timeline>
              </section>
              {/* FORMATIONS */}
              <section id="section-4" ref={props.refProp4b} className="container background">
                  <div className="flex-wrapper column center">
                      <h1>Mes formations</h1>
                      <span className="underline"></span>
                  </div>
                  <Timeline lineColor={'#ddd'}>
                      {STUDIES.map((job, i) => <TimelineItem
                                dateInnerStyle={{ backgroundColor: i%2 === 0 ? '#e86971' : '#2C3545' }}
                                key={i}
                                dateText={job.date}
                                style={{ color: i%2 === 0 ? '#e86971' : '#2C3545'}}
                            >
                                <h3 style={{ color: '#e86971'}}>{job.title}</h3>
                                <h4>{job.subtitle}</h4>
                                <p>{job.description}</p>
                            </TimelineItem>
                      )}
                  </Timeline>
              </section>
              {/* CONTACT */}
              <section ref={props.refProp5} className="contact-container">
                  <span className="background-3"></span>
                  <h2>Envie de créer une application<br/>
                      Web ou mobile ?</h2>
                  <div className="contact">
                      <svg className="image-section-middle-left" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                              viewBox="0 0 595.3 841.9" style={{enableBackground:(0 ,0, 595.3, 841.9)}} >
                          <title>Pti'Poulpe</title>
                          <path style={{fill:'#eef5f7'}} d="M522.3,576.1c-182.6-2.5,52.7-5-43.5-219.8c-3.6-8-0.1-17.4,7.9-21.1c0.7-0.3,1.4-0.6,2.1-0.8
                              c11-3.1,15.9-21.1,3.3-59.7c-0.2-0.6-0.4-1.2-0.7-1.7C342.1-55.8,79.1,296.4,134.7,314.8c9.5,3.1,13.4,14.6,8.3,23.2
                              c-33.5,56.5-58.4,148.6-6.4,206.9c5.9,6.6,5.4,16.7-1.1,22.6c-1,0.9-2.1,1.7-3.3,2.3c-50,26.5-103,25.3-60.9,74.3
                              c0.8,0.9,1.7,1.7,2.7,2.5c23.9,17,55.7,21.2,80.4,17.6c9.5-1.4,18.3,5.8,18.3,15.4c0.3,47.8,105.7,49,114.8-43
                              c-21.4,111.3,106,112.8,85.6-4c8.5,97.4,172.6,121.8,69.9-12.1c15.8,22.3,84.2,5.4,94.4-23.2c2.9-8.3-1.6-17.3-9.9-20.2
                              C525.7,576.4,524.1,576.1,522.3,576.1z M199.9,537.5c-32.7-0.4-40.4-55.2,0.3-59.3c0.7-0.1,1.3-0.1,2-0.1
                              c32.4,1.1,40.2,55.1-0.5,59.3C201.1,537.5,200.5,537.5,199.9,537.5z M408.2,548.6c-31.9-0.9-40.1-55.7,0.8-59.3
                              c0.6,0,1.1-0.1,1.7-0.1c33.4,0.9,39.8,54.7-0.5,59.3C409.5,548.6,408.8,548.6,408.2,548.6z"/>
                      </svg>
                      <p className="text">Contactez-moi au plus vite !</p>
                      <div className="note">
                          <div>
                              <div className="row">
                                  <img className="icon" src="/Portfolio/Assets/Phone.png" alt="Tel"/>
                                  <p>Téléphone</p>
                              </div>
                              <p className="data">07 81 48 47 35</p>
                          </div>
                          <div>
                              <div className="row">
                                  <img className="icon" src="/Portfolio/Assets/mail.png" alt="Mail"/>
                                  <p>Email</p>
                              </div>
                              <p className="data">laurent.vltn@gmail.com</p>
                          </div>
                          <div>
                              <div className="row">
                                  <img className="icon" src="/Portfolio/Assets/Pins.png" alt="Pins"/>
                                  <p>Localisation</p>
                              </div>
                              <p className="data">17300, Rochefort</p>
                          </div>
                      </div>
                  </div>
              </section>
          </div>)
}
const contact = {
    flexDirection: 'row',
     display: 'flex',
     justifyContent: 'space-around',
     alignItems: 'center',
}