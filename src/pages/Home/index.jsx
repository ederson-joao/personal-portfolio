import React from "react";
import './index.css';
import Header from '../../components/header';
import myPhoto from '../../assets/img/my-photo.png';
import curriculo from '../../assets/cv/curriculo-ederson.pdf';
import iconGitHub from '../../assets/img/icon-github.svg';
import iconLinkedin from '../../assets/img/icon-linkedin.svg';
import iconCurriculo from '../../assets/img/icon-curriculo.svg';

function Home() {
    return(
      <>
        <Header/>
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
      </>
    )
}

export default Home;