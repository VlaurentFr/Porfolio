import './App.css';
import { Route, useLocation, Link } from 'react-router-dom';
import { Client } from './Pages/Client';
import './styles/styles.css'
import { Recruteur } from './Pages/Recruteur';
import { useRef, useState } from 'react';

// Set up pages using the React Router Link element for navigation - instead of <a></a>
const App = (props) => {
  const location = useLocation()
  const section1 = useRef(null)
  const section2 = useRef(null)
  const section3 = useRef(null)
  const section4 = useRef(null)
  const section4a = useRef(null)
  const section4b = useRef(null)
  const section5 = useRef(null)
  const [theme, setTheme] = useState('light')
  return(
  <main data-theme="light">
    <link href='https://css.gg/css' rel='stylesheet'></link>
    {/* NAVBAR */}
     {location.pathname !== '/' && <nav className='scrolled'>
        <svg className="logo" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 595.3 841.9" style={{enableBackground:(0, 0, 595.3, 841.9)}} >
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
        <Link id="scroll-1" className="scroll" to="/">SquiDev</Link>
        <div>
        <a className="scroll" onClick={() => {section1.current.scrollIntoView()} }>Qui suis-je ?</a>
        <a className="scroll" onClick={() => {section2.current.scrollIntoView()} }>Mes projets</a>
        <a className="scroll" onClick={() => {section3.current.scrollIntoView()} }>Mes colaborations</a>
        {location.pathname === '/client' && <a className="scroll" onClick={() => {section4.current.scrollIntoView()} }>Mes services</a>}
        {location.pathname === '/recruteur' &&  <a className="scroll" onClick={() => {section4.current.scrollIntoView()} }>Mes compétences</a>}
        {location.pathname === '/recruteur' &&  <a className="scroll" onClick={() => {section4a.current.scrollIntoView()} }>Mes expériences</a>}
        {location.pathname === '/recruteur' &&  <a className="scroll" onClick={() => {section4b.current.scrollIntoView()} }>Mes formations</a>}
        <a className="scroll" onClick={() => {section5.current.scrollIntoView()} }>Contact</a>
        {location.pathname === '/recruteur' && <a href="./Assets/CV_Valentin_LAURENT.pdf" download>Mon CV</a>}
        </div>
        <div className="theme-switcher">
            <div className="theme-wrapper" onClick={() => {let cdt = theme === "dark" ? "light" : "dark"; setTheme(cdt); document.documentElement.setAttribute("data-theme", cdt)}}>
              <div style={{backgroundColor: theme === "dark" ? '#000' : null}}>
                <i class="gg-moon"></i>
              </div>
              <div style={{backgroundColor: theme !== "dark" ? '#FF9900' : null}}>
                <i class="gg-sun"></i>
              </div>
            </div>
        </div>
    </nav>}
    {/* HOMEPAGE */}
    {location.pathname === '/' && <section id="section-1" className="container column">
        <span className="background-1"></span>
        <div className="flex-wrapper center">
            <h1>Bienvenue chez SquiDev !</h1>
        </div>
        <div className="flex-wrapper padding center">
            <p className="text-center">SquiDev développe des applications Web et Mobile pour tous depuis 2020, je suis freelance et fier de vous proposer mes services ! Ici, vous trouverez toutes les informations dont vous avez besoin !</p>
        </div>
        <div className="flex-wrapper row evenly">
            <Link className="buttonPrimary"to="/client" onClick={() => {} }>Je suis client</Link>
            <Link className="buttonSecondary" to="/recruteur" onClick={() => {} }>Je suis recruteur</Link>
        </div>
        <svg className="image-section-middle-right" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 595.3 841.9" style={{enableBackground:(0, 0, 595.3, 841.9)}} >
            <title>Pti'Poulpe</title>
            <path className="st0" d="M522.3,576.1c-182.6-2.5,52.7-5-43.5-219.8c-3.6-8-0.1-17.4,7.9-21.1c0.7-0.3,1.4-0.6,2.1-0.8
                c11-3.1,15.9-21.1,3.3-59.7c-0.2-0.6-0.4-1.2-0.7-1.7C342.1-55.8,79.1,296.4,134.7,314.8c9.5,3.1,13.4,14.6,8.3,23.2
                c-33.5,56.5-58.4,148.6-6.4,206.9c5.9,6.6,5.4,16.7-1.1,22.6c-1,0.9-2.1,1.7-3.3,2.3c-50,26.5-103,25.3-60.9,74.3
                c0.8,0.9,1.7,1.7,2.7,2.5c23.9,17,55.7,21.2,80.4,17.6c9.5-1.4,18.3,5.8,18.3,15.4c0.3,47.8,105.7,49,114.8-43
                c-21.4,111.3,106,112.8,85.6-4c8.5,97.4,172.6,121.8,69.9-12.1c15.8,22.3,84.2,5.4,94.4-23.2c2.9-8.3-1.6-17.3-9.9-20.2
                C525.7,576.4,524.1,576.1,522.3,576.1z M199.9,537.5c-32.7-0.4-40.4-55.2,0.3-59.3c0.7-0.1,1.3-0.1,2-0.1
                c32.4,1.1,40.2,55.1-0.5,59.3C201.1,537.5,200.5,537.5,199.9,537.5z M408.2,548.6c-31.9-0.9-40.1-55.7,0.8-59.3
                c0.6,0,1.1-0.1,1.7-0.1c33.4,0.9,39.8,54.7-0.5,59.3C409.5,548.6,408.8,548.6,408.2,548.6z"/>
        </svg>
    </section>}
    {/* ROUTER */}
    <div>
      <Route path='/client'>
        <Client refProp1={section1} refProp2={section2} refProp3={section3} refProp4={section4} refProp5={section5}/>
      </Route>
      <Route path='/recruteur'>
        <Recruteur refProp1={section1} refProp2={section2} refProp3={section3} refProp4={section4} refProp4a={section4a} refProp4b={section4b} refProp5={section5}/>
      </Route>
    </div>
  </main>
  )
}

export default App;
