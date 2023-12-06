import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>

            <p><Link to={'/'}>Categorias</Link></p>
            <p><Link to={'/subCategorias'}>SubCategorias</Link></p>
            <p><Link to={'/producto'}>Productos</Link></p>
            <p><Link to={'/factura'}>Factura</Link>
</p>

        </>
    )
}