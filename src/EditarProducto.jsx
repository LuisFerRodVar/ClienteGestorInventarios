import { useParams } from "react-router-dom"
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import * as APIProducto from './api/producto'
export function EditarProducto(){
    const [nuevoProducto,setNuevoProducto] = useState([])
    const params = useParams();
    const id = params.id;
    useEffect(() =>{
        APIProducto.getProducto(id).then(setNuevoProducto);
    },[])
    function handleSubmit(e){
        e.preventDefault();
        APIProducto.editarProducto(nuevoProducto).then(resultado => {
            if(resultado == 'true'){
                alert("Se edito correctamente")
            }else{
                alert("No se logro editar")
            }
        })
    }
    return(
        <>
            <Navbar/>
            <form id="editar" onSubmit={handleSubmit}>
                ID:<input id="id" type="text" required disabled defaultValue={nuevoProducto.id} /><br></br>
                ID subcategoria:<input id="idSubCategoria" type="number" defaultValue={nuevoProducto.idSubCategoria} onChange={event => setNuevoProducto({...nuevoProducto,idSubCategoria:event.target.value})} /><br></br>
                Nombre:<input id="nombre" type="text" defaultValue={nuevoProducto.nombre} onChange={event => setNuevoProducto({...nuevoProducto,nombre:event.target.value})} /><br></br>
                Marca:<input id="marca" type="text" defaultValue={nuevoProducto.marca} onChange={event => setNuevoProducto({...nuevoProducto,marca:event.target.value})} /><br></br>
                Detalle:<input id="detalle" type="text" defaultValue={nuevoProducto.detalle} onChange={event => setNuevoProducto({...nuevoProducto,detalle:event.target.value})} /><br></br>
                Cantidad:<input id="cantidad" type="number" defaultValue={nuevoProducto.cantidad} onChange={event => setNuevoProducto({...nuevoProducto,cantidad:event.target.value})} /><br></br>
                Conversion:<select id="conversion" defaultValue={nuevoProducto.conversion} onChange={event => setNuevoProducto({...nuevoProducto,conversion:event.target.value})}>
                    <option key={0} value={0}>--------</option>
                    <option key={1} value={1}>Unidades</option>
                    <option key={2} value={2}>Gramos</option>
                    <option key={3} value={3}>Mililitros</option>
                </select>
                <input type="submit" id="editar" value={"Editar"} />

            </form>
        </>
    )
}