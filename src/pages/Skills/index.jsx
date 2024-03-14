import React from "react";
import './index.css';
import Header from '../../components/header';
import Card from 'react-bootstrap/Card';
import iconHTML5 from '../../assets/img/icon-html5.svg';
import iconCSS3 from '../../assets/img/icon-css3.svg';

function Skills() {
    return (
        <>
        <Header/>
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
    </>
  )
}

export default Skills;