import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import * as APICategoria from "./api/categoria"
import Navbar from "./Navbar";

export function EditarCategoria(){
    const params = useParams();
    const id = params.id;
    const [categoria,setCategoria] = useState([]);
    function handleSubmit(e){
        e.preventDefault();
        APICategoria.editarCategoria(categoria).then(resultado =>{
            if(resultado == 'true'){
                alert("Se edito correctamente")
            }else{
                alert("No se edito correctamente")
            }
        })
    }
    useEffect(() =>{
        APICategoria.getCategoria(id).then(setCategoria);
    },[])
    return(
        <>
            <Navbar />
            <form id="formularioEditar" onSubmit={handleSubmit}>
                ID:<input id="id" type="text" required disabled defaultValue={categoria.id}  onChange={event => setCategoria({...categoria,id:event.target.value})}/><br></br>
                Nombre:<input id="nombre" type="text" defaultValue={categoria.nombre} onChange={event => setCategoria({...categoria,nombre:event.target.value})}/><br></br>
                <input type="submit" value={"Editar"} />
            </form>
        </>
    )
}