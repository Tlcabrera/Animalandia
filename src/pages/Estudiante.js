import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListEstudiantes from "../components/listEstudiantes/ListEstudiantes";

function Estudiante(){
    return(
        <Container>
            
            <Link to="/new" className="btn btn-success mt-3 ">Nuevo Estudiante</Link>
            <h1 className="text-center">Listado de Estudiantes</h1>

            <ListEstudiantes/>

        </Container>
    );
}

export default Estudiante;