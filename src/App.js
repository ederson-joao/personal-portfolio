import './App.css';
import  Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function App() {
  return (
      <header>
        <div className='containerHeader'>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic"></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item  href="#sobre">Sobre</Dropdown.Item>
            <Dropdown.Item  href="#skills">Habilidades</Dropdown.Item>
            <Dropdown.Item  href="#projects">Projetos</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          <h2>Portfólio</h2>
          <label for="checkbox" className='colorTheme'>
            <div className='colorThemePicker'></div>
          </label>
        </div>
      </header>
  );
}

export default App;
