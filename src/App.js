import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import  Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import myPhoto from './assets/img/my-photo.png';
import curriculo from './assets/cv/curriculo-ederson.pdf';
import iconGitHub from './assets/img/icon-github.svg';
import iconLinkedin from './assets/img/icon-linkedin.svg';
import iconCurriculo from './assets/img/icon-curriculo.svg';
import iconHTML5 from './assets/img/icon-html5.svg';
import iconCSS3 from './assets/img/icon-css3.svg';

function App() {
  return (
    <>
      <header>
        <div className='containerHeader'>
        <Dropdown>
          <Dropdown.Toggle variant='success' id='dropdown-basic'></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item  href="#skills">Habilidades</Dropdown.Item>
            <Dropdown.Item  href="#projects">Projetos</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          <h2>Portfólio</h2>
          <label for='checkbox' className='colorTheme'>
            <div className='colorThemePicker'></div>
          </label>
        </div>
      </header>
      <section className='about'>
        <div className='containerAbout'>
          <div className='banner'>
            <img className='myPhoto' src={myPhoto} alt='My Photo'></img>
            <div className='intro'>
              <h2>Hello World! Eu sou o</h2>
              <h2 className='name'>Ederson Santos</h2>
              <h1>Desenvolvedor Front-End</h1>
            </div>
            <div className='links'>
              <a href={curriculo} download><img src={iconCurriculo} alt='Linkedin'/></a>
              <a href="https://www.linkedin.com/in/ederson-joao/" target="_blank"><img src={iconLinkedin} alt='Linkedin'/></a>
              <a href="https://github.com/ederson-joao" target="_blank"><img src={iconGitHub} alt='GitHub'/></a>
            </div>
            <div className='personalSummary'>
              <h2>Sobre mim</h2>
              <p>Visto meu interesse em programação desde a Universidade, comecei a estudar e aprofundar meu conhecimento em Desenvolvimento 
                de Software Web voltado inicialmente para Front-end, com isto já realizei diversos cursos sobre HTML, CSS, JavaScript e Github. 
                Estou agora estudando sobre React.js, sempre realizando a criação de diversos projetos ao longo do meu aprendizado.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='skills'>
            <h2>Habilidades</h2>
            <div className='cards'>
              <Card>
                <Card.Img variant="top" src={iconHTML5} />
                <Card.Title>HTML5</Card.Title>
              </Card>
              <Card>
                <Card.Img variant="top" src={iconCSS3} />
                <Card.Title>CSS3</Card.Title>
              </Card>
              <Card>
                <Card.Img variant="top" src={iconCSS3} />
                <Card.Title>JavaScript</Card.Title>
              </Card>
              <Card>
                <Card.Img variant="top" src={iconCSS3} />
                <Card.Title>React</Card.Title>
              </Card>
              <Card>
                <Card.Img variant="top" src={iconCSS3} />
                <Card.Title>Git</Card.Title>
              </Card>
              <Card>
                <Card.Img variant="top" src={iconCSS3} />
                <Card.Title>GitHub</Card.Title>
              </Card>
            </div>
        </div>
      </section>
    </>
  )
}

export default App;
