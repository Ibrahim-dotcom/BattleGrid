import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from '/assets/images/logo.png'
    

function NavBar() {
  const handleSelect = (eventKey) => {
    let games = document.querySelector('#game');
    // if(eventKey == 1)games.scrollIntoView();
  };
  const navItems = [{name: 'GAMES', href: '#/home', eventKey: '1'}]

  return (
    // <div style={{display: 'flex', justifyContent: 'space-between', color: '#fff', fontFamily: 'monolith'}}>
    //     <h2>BATTLE GRID</h2>
    <Nav xvariant="pills" activeKey="1" onSelect={handleSelect} style={{backgroundColor: 'rgba(0,0,0,0.2)', height: '10vh', color: 'white', justifyContent: 'flex-end', marginRight: 25}}>
        {/* <h1 style={{alignSelf: 'flex-start'}}> BATTLE GRID</h1> */}
        <img src={Logo} width={80} height={'auto'} style={{position: 'absolute', left: 30}} />
      <Nav.Item>
        <Nav.Link eventKey="1" href="#games">
          GAMES
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          FEATURES
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3">
          SUPPORT
        </Nav.Link>
      </Nav.Item>   

      <Nav.Item>
        <Nav.Link eventKey="3">
          ABOUT
        </Nav.Link>
      </Nav.Item> 

      <Nav.Item>
        <Nav.Link eventKey="3" href="/login">
          LOGIN
        </Nav.Link>
      </Nav.Item> 

      <Nav.Item>
        <Nav.Link eventKey="3" href="/signup">
          <Button>SIGN UP</Button>
        </Nav.Link>
      </Nav.Item> 
      {/* <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    // </div>
  );
}

export default NavBar;