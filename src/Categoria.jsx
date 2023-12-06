import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import * as APICategoria from "./api/categoria"
import { useNavigate } from "react-router-dom";

export function Categoria() {
    const navigate = useNavigate();
    const [nuevaCategoria, setNuevaCategoria] = useState([{ id: "", nombre: "" }]);
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        APICategoria.obtenerCategorias().then(setCategorias);
    })
    function editar(id) {
        navigate("/categoria/" + id);
    }
    function eliminar(id) {
        APICategoria.eliminarCategoria(id).then(resultado =>{
            if(resultado == 'true'){
                alert("Eliminado correctamente")
            }else{
                alert("No se elimino")
            }
        })

    }
    function handleSubmit(e) {
        e.preventDefault();
        APICategoria.agregarCategoria(nuevaCategoria).then(resultado => {
            if (resultado == "true") {
                alert("Se ha agregado la categoria correctamente");
            } else {
                alert("Error la categoria no se ha agregado")
            }
        })
    }
    return (
        <>
            <Navbar />
            <h1>Categoria</h1>
            <form id="agregarCategoria" onSubmit={handleSubmit}>
                ID:<input id="id" type="text" onChange={event => setNuevaCategoria({ ...nuevaCategoria, id: event.target.value })} />
                Nombre:<input id="nombre" type="text" onChange={event => setNuevaCategoria({ ...nuevaCategoria, nombre: event.target.value })} />
                <input id="agregar" type="submit" value={"Agregar"} />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th></th>
                        <th></th>

                    </tr>

                </thead>
                <tbody>
                    {
                        categorias?.map(categoria => {
                            return (
                                <tr key={categoria.id}>
                                    <td>{categoria.id}</td>
                                    <td>{categoria.nombre}</td>
                                    <td onClick={() => editar(categoria.id)}>Editar</td>
                                    <td onClick={() => eliminar(categoria.id)}>Eliminar</td>
                                </tr>
                            );

                        })
                    }

                </tbody>
            </table>
        </>
    )
}