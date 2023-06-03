import '../styles/styles.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
                        <h2>Je m’appelle Valentin LAURENT, je suis développeur Fullstack en Web et mobile.</h2>
                        </div>
                          <p>
                              Tout droit sorti de licence professionnelle développement mobile après un DUT informatique de 2 ans, je me suis lancé dans le monde des freelances. Je vous propose aujourd'hui mes services afin de vous aider dans la réalisation de vos idées d'applications en Web et mobile. De par mon expérience d'alternant et de professionnel, j'ai pu toucher à une multitude de technologies et de produits différents m'apportant de nombreuses connaissances utiles dans la production de vos idées ! J'accompagne à cette tâche depuis déjà plus d'un an, vous conseillant sur vos besoins et envies.

                              J'ai également eu la chance de travailler chez Raccourci Agency, une entrprise de solution numérique pour le tourisme basé à La Rochelle.
                        </p>
                    </article>
                  </div>
              </section>
              {/* PROJET */}
              <ProjectSection refProp={props.refProp2}></ProjectSection>
              {/* COLAB */}
              <Colab refProp={props.refProp3}></Colab>
              {/* Compétences */}
              <section ref={props.refProp4} className="container">
                  <span className="background-2"></span>
                  <div className="flex-wrapper column center">
                      <h1>Mes compétences</h1>
                      <span className="underline"></span>
                  </div>
                  <div>
                  {/* <Carousel className="slider" autoPlay={true} interval={7000}showStatus={false} emulateTouch={false} centerMode={true} infiniteLoop={true} centerSlidePercentage={25}>
                    {SKILLS.map((item,i) => <CarouselCard onClick={()=> setSkill(i)} skill={item} index={i} isClick={skill == i}></CarouselCard>)}
                  </Carousel> */}
                  <div className='card-wrapper'>
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
                            <div className='card-wrapper' >
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
              <section ref={props.refProp4a} className="container">
                  <span className="background-2"></span>
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
              <section ref={props.refProp4b} className="container">
                  <span className="background-2"></span>
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
                  <div className="contact">
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