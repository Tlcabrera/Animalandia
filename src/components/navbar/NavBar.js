import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
       <Navbar bg="dark" variant="dark">
           <Container fluid> 
                <Link to="/" className="navbar-brand">CRUD REACT JS</Link>
                <Nav className="me-auto">
                <Link to="/" className="nav-link active">Estudiante</Link>
                </Nav>
            </Container>
       </Navbar>
    );
}
export default NavBar;