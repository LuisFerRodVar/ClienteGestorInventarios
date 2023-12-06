import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import * as APISubCategoria from "./api/subCategoria"

export function EditarSubCategoria(){
    const params = useParams();
    const id = params.id;
    const [nuevaSubCategoria,setNuevaSubCategoria] = useState([])
    useEffect(() =>{
        APISubCategoria.getSubCategoria(id).then(setNuevaSubCategoria);
    },[])
    function handleSubmit(e){
        e.preventDefault()
        APISubCategoria.editarSubCategoria(nuevaSubCategoria).then(resultado =>{
            if(resultado == 'true'){
                alert("Se edito correctamente")
            }else{
                alert("No se logro editar")
            }
        })
    }
    return(
        <>
            <Navbar />
            <form id="editarSubCategoria" onSubmit={handleSubmit}>
                ID:<input id="id" type="text" defaultValue={nuevaSubCategoria.id} required disabled onChange={event => setNuevaSubCategoria({...nuevaSubCategoria,id:event.target.value})} /><br></br>
                ID categoria:<input type="number" id="idCategoria" defaultValue={nuevaSubCategoria.idCategoria} onChange={event => setNuevaSubCategoria({...nuevaSubCategoria,idCategoria:event.target.value})} /> <br></br>
                Nombre:<input type="text" id="nombre" defaultValue={nuevaSubCategoria.nombre} onChange={event => setNuevaSubCategoria({...nuevaSubCategoria,nombre:event.target.value})} /><br></br>
                <input type="submit" value={"Editar"} />
            </form>
        </>
    )
}