import { ListaProdutos } from "../components/ListaProdutos";
import "./Produtos.css";

export default function Produtos(){
    
    return(
        <>
            <div>
                <h1>Produto</h1>

                <table className="tabelaProd">
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                        <th>EDITAR/EXCLUIR</th>
                    </tr>

                    {ListaProdutos.map((produto, indice) => (
                        <tr key={indice}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>
                                <Link to={`/editar/produto/${produto.id}`}>EDITAR</Link> / 
                                <Link to={`/excluir/produto/${produto.id}`}>EXCLUIR</Link>
                            </td>
                        </tr>
                    ))}

                </table>

            </div>
        </>
    )
}

