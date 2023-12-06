const URL = 'https://localhost:7266/api/'
export function getProducto(id){
    return fetch(URL + "producto?id=" +id,{
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.json())
}
export function obtenerProductos(){
    return fetch(URL + "productos",{
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.json())
}
export function agregarProducto(producto){
    return fetch(URL + "productos",{
        method:'POST',
        body: JSON.stringify(producto),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.text())
}
export function editarProducto(producto){
    return fetch(URL + "productos",{
        method:'PUT',
        body: JSON.stringify(producto),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.text())
}
export function eliminarProducto(id){
    return fetch(URL + "productos?id=" + id,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(resultado => resultado.text())
}