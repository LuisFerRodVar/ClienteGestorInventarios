import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import * as APIProductos from './api/producto'
import { useNavigate } from "react-router-dom";
import { obtenerCategorias } from "./api/categoria";

export function Productos(){
    const navigate = useNavigate()
    const [nuevoProducto,setNuevoProducto] = useState([{id:"",idSubCategoria:"",nombre:"",marca:"",detalle:"",cantidad:"",conversion:""}])
    const [productos, setProductos] = useState([])
    const [subCategorias, setSubCategorias] = useState([])
    useEffect(() =>{
        APIProductos.obtenerProductos().then(setProductos);
        obtenerCategorias().then(setSubCategorias);
    })
    function editar(id){
        navigate('/producto/' + id);
    }
    function eliminar(id){
        APIProductos.eliminarProducto(id).then(resultado => {
            if(resultado == 'true'){
                alert("Se elimino correctamente")
            }else{
                alert("No se elimino correctamente")
            }
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        APIProductos.agregarProducto(nuevoProducto).then(resultado =>{
            if(resultado == 'true'){
                alert("Se agrego correctamente")
            }else{
                alert("No se logro agregar")
            }
        })
    }
    return(
        <>
            <Navbar />
            <h1>Productos</h1>
            <form id="agregar" onSubmit={handleSubmit}>
                ID:<input type="number" id="id" onChange={event => setNuevoProducto({...nuevoProducto,id:event.target.value})} />
                ID subcategoria:<select id="subCategoria" onChange={event => setNuevoProducto({...nuevoProducto,idSubCategoria:event.target.value})}>
                    <option key={0} value={0}>----------------</option>
                    {

                        subCategorias?.map(subCategoria =>{
                            return(
                                <option value={subCategoria.id} key={subCategoria.id}>{subCategoria.nombre}</option>
                            )
                        })
                    }
                </select>
                Nombre:<input type="text" id="nombre" onChange={event => setNuevoProducto({...nuevoProducto,nombre:event.target.value})} />
                Marca:<input type="text" id="marca" onChange={event => setNuevoProducto({...nuevoProducto,marca:event.target.value})} />
                Detalle:<input type="text" id="detalle" onChange={event => setNuevoProducto({...nuevoProducto,detalle:event.target.value})} />
                Cantidad:<input type="text" id="cantidad" onChange={event => setNuevoProducto({...nuevoProducto,cantidad:event.target.value})} />
                Conversion:<select id="conversion" onChange={event => setNuevoProducto({...nuevoProducto,conversion:event.target.value})}>
                    <option key={0} value={0}>--------</option>
                    <option key={1} value={1}>Unidades</option>
                    <option key={2} value={2}>Gramos</option>
                    <option key={3} value={3}>Mililitros</option>
                </select>
                <input type="submit" value={"Agregar"} />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID subcategoria</th>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Detalle</th>
                        <th>Cantidad</th>
                        <th>Conversion</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos?.map(producto =>{
                            return(
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.idSubCategoria}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.marca}</td>
                                <td>{producto.detalle}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.conversion}</td>
                                <td onClick={() =>editar(producto.id)}>Editar</td>
                                <td onClick={() =>eliminar(producto.id)}>Eliminar</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}