import { Route, Routes } from "react-router-dom";
import { Categoria } from "./Categoria";
import { SubCategoria } from "./SubCategoria";
import { Productos } from "./Productos";
import { Facturas } from "./Facturas";
import { EditarCategoria } from "./editarCategoria";
import { EditarSubCategoria } from "./EditarSubCategoria";
import { EditarProducto } from "./EditarProducto";

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Categoria />} />
      <Route path='/subCategorias' element={<SubCategoria />} />
      <Route path='/producto' element={<Productos />} />
      <Route path='/factura' element={<Facturas />} />
      <Route path='/categoria/:id' element={<EditarCategoria />} />
      <Route path='/subCategorias/:id' element={<EditarSubCategoria />} />
      <Route path='/producto/:id' element={<EditarProducto />} />
    </Routes>
  )
}
