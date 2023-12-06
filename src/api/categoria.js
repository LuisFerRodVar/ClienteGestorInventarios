const URL = 'https://localhost:7266/api/'
export function agregarCategoria(categoria){
    return fetch(URL + 'categoria', {
        method:'POST',
        body: JSON.stringify(categoria),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.text())
}
export function obtenerCategorias(){
    return fetch(URL + 'categoria', {
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.json())
}
export function eliminarCategoria(id){
    return fetch(URL + 'categoria?id=' +id ,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.text())
}
export function getCategoria(id){
    return fetch(URL + 'cate?id=' + id,{
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.json())
}
export function editarCategoria(categoria){
    return fetch(URL + 'categoria', {
        method:'PUT',
        body:JSON.stringify(categoria),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.text())
}
