import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { obtenerCategorias } from "./api/categoria";
import * as APISubCategoria from "./api/subCategoria"
import { useNavigate } from "react-router-dom";

export function SubCategoria(){
    const [nuevaSubCategoria, setNuevaSubCategoria] = useState([{id:'',nombre:'',idCategoria:''}]);
    const [categorias, setCategorias] = useState([]) 
    const [subCategorias, setSubCategorias] = useState([])
    const navigate = useNavigate()
    useEffect(() =>{
        obtenerCategorias().then(setCategorias);
        APISubCategoria.obtenerSubCategorias().then(setSubCategorias);
    })
    function handleSubmit(e){
        e.preventDefault();
        APISubCategoria.agregarSubCategoria(nuevaSubCategoria).then(resultado => {
            if(resultado == 'true'){
                alert('Se agrego correctamente')
            }else{
                alert('No se agrego correctamente')
            }
        })
    }
    function eliminar(id){
        APISubCategoria.eliminarSubCategoria(id).then(resultado =>{
            if(resultado == 'true'){
                alert("Se elimino correctamente")
            }else{
                alert("No se elimino")
            }
        })
    }
    function editar(id){
        navigate("/subCategorias/" + id)
    }

    return(
        <>
            <Navbar />
            <h1>SubCategoria</h1>
            <form id="agregarCategoria" onSubmit={handleSubmit}>
                ID:<input id="id" type="text" onChange={event => setNuevaSubCategoria({ ...nuevaSubCategoria, id: event.target.value })} />
                Nombre:<input id="nombre" type="text" onChange={event => setNuevaSubCategoria({ ...nuevaSubCategoria, nombre: event.target.value })} />
                Categoria:<select id="combo" onChange={event => setNuevaSubCategoria({...nuevaSubCategoria,idCategoria:event.target.value})}>
                    <option key={0}value={0}>-------</option>
                    {
                        categorias?.map(categoria =>{
                            return(

                                <option key={categoria.id} value={categoria.id}> {categoria.nombre}</option>
                            )
                        })
                    }
                </select>
                <input id="agregar" type="submit" value={"Agregar"} />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Categoria</th>
                        <th>Nombre</th>
                        <th></th>
                        <th></th>

                    </tr>

                </thead>
                <tbody>
                    {
                        subCategorias?.map(subCategoria => {
                            return (
                                <tr key={subCategoria.id}>
                                    <td>{subCategoria.id}</td>
                                    <td>{subCategoria.idCategoria}</td>
                                    <td>{subCategoria.nombre}</td>
                                    <td onClick={() => editar(subCategoria.id)}>Editar</td>
                                    <td onClick={() => eliminar(subCategoria.id)}>Eliminar</td>
                                </tr>
                            );

                        })
                    }

                </tbody>
            </table>
        </>
    )
}