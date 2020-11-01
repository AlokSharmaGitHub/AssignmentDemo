import logo from './logo.svg';
import './App.css';
import SelectedValue from './components/selectedValue'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import Value from './components/value';



function App() {
  return (
    <div className="App background">
      <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">LOGO</Navbar.Brand>
    <Nav className="mr-auto">
      
    </Nav>
    <Form inline>
    <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">My Portfolio</Nav.Link>
      <Nav.Link href="#pricing">Clients</Nav.Link>
      <Button variant="outline-light">Get in Touch</Button>
    </Form>
  </Navbar>
{/* <Value /> */}
  <SelectedValue />

    </div>
  );
}

export default App;
