import React from 'react';
import  Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import './index.css';

function Header() {
    return (
        <header>
        <div className='containerHeader'>
        <Dropdown>
          <Dropdown.Toggle variant='success' id='dropdown-basic'></Dropdown.Toggle>

          <Dropdown.Menu>
          <Dropdown.Item><Link to='/'>Home</Link></Dropdown.Item>
            <Dropdown.Item><Link to='/skills'>Habilidades</Link></Dropdown.Item>
            <Dropdown.Item><Link to='/projects'>Projetos</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          <h2>Portfólio</h2>
          <label for='checkbox' className='colorTheme'>
            <div className='colorThemePicker'></div>
          </label>
        </div>
      </header>
    )
}

export default Header;