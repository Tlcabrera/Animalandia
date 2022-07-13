import axios from "axios";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import Swal from 'sweetalert2'

function FormEstudiantes(){

    /*5. Constante history para retornar al listado*/
    const history=useHistory();
    
    /*1.Inicializamos los inputs en el estado, para poder recibir los valores que se digiten 
    en él y controlarlos */
    const [data,setData]=useState({id:"",nombre:"",apellido:"",foto:"",perfil:""});
    /*2. Se usa la función handleChange para que cada vez que haya un cambio en el input
    guarde el name y el value del mismo */
    const handleChange=({target})=>{
        //Cada vez que haya un cambio se va a guardar el valor en el estado data
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    /*4. Crear petición asíncrona*/
    const url="http://localhost:5000/estudiantes";  

    /*3. funci{on para procesar el envío del formulario*/
        const handleSubmit=async(e)=>{
            e.preventDefault();
            const response=await axios.post(url,data);//await espera hasta que se ejcute la petición
            //console.log(response);
            if (response.status === 201) {
                
                Swal.fire(
                    'Guardado!',
                    `El estudiante <strong> ${response.data.nombre} ${response.data.apellido}</strong> ha sido guardado exitosamente!`,
                    'success'
                )
                history.push("/");
                
            }else {
                Swal.fire(
                    'Error!',
                    'Hubo un problema al registrar el estudiante!',
                    'error'
                )
            }
        }
    return(
        <div>
        <Container>
        <h1 className="text-center mt-3">Datos Estudiante</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese su nombre"
                name="nombre" 
                value={data.nombre}
                onChange={handleChange}/> 
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese su apellido"
                name="apellido" 
                value={data.apellido}
                onChange={handleChange}/> 
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Tipo de Documento</Form.Label>
            <Form.Select 
            name="tipodoc"
            onChange={handleChange}>
                <option>Seleccione un Tipo de Documento</option>
                <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                <option value="Cédula de extranjería">Cédula de extranjería</option>
            </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>No. Documento</Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Ingrese su número de documento"
                name="numdoc" 
                value={data.numdoc}
                onChange={handleChange}/> 
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Foto</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese la URL de la imagen"
                name="foto" 
                value={data.foto}
                onChange={handleChange}/> 
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Perfil</Form.Label>
                <Form.Control 
                as="textarea" 
                rows={3}
                placeholder="Digite su perfil"
                name="perfil" 
                value={data.perfil}
                onChange={handleChange}/> 
            </Form.Group>
            
            <button className="btn btn-primary">Guardar</button>
        </Form>
        </Container>
        </div>
    );
}
export default FormEstudiantes;