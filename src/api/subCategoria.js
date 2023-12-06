const URL = 'https://localhost:7266/api/'
export function obtenerSubCategorias(){
    return fetch(URL + 'subCategoria', {
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.json())
}
export function agregarSubCategoria(subCategoria){
    return fetch(URL + 'subCategoria', {
        method:'POST',
        body:JSON.stringify(subCategoria),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.text())
}
export function eliminarSubCategoria(id){
    return fetch(URL + 'subCategoria?id='+ id,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.text())
}
export function editarSubCategoria(subCategoria){
    return fetch(URL + 'subCategoria',{
        method:'PUT',
        body:JSON.stringify(subCategoria),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.text())
}
export function getSubCategoria(id){
    return fetch(URL + 'subCate?id=' + id,{
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.json())
}