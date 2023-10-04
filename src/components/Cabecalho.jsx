import { Link } from "react-router-dom"
export default function Cabecalho(){

    return(
        <>
            <header className="cabecalho">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                </ul>
            </header>

        </>
    )
}