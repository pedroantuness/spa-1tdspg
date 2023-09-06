import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { AiOutlineEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import "./Produtos.css";

export default function Produtos() {

    const estiloCelulas = {
        widht: "10%",
        textAlign: "center",
        fontWeight: "bold"
    };



    return(
        <>
            <div>
                <h1>Produtos</h1>

                <table className="tabelaProd">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>IMG</th>
                        <th><Editar/> / <Excluir/></th>
                    </tr>

                    {ListaProdutos.map( (produto, indice) => (
                        <tr className= {(produto.id % 2 ==0) ? "linhaCinza" : "linhaBranca"} key={indice}>
                            <td style={estiloCelulas}>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.desc}</td>
                            <td>{produto.preco}</td>
                            <td><img style={{width: "100px"}} src={`${produto.img}`} alt={`${produto.desc}`}/></td>
                            <td><Link to={`/editar/produto/${produto.id}`}><Editar/></Link> / 
                            <Link to={`/excluir/produto/${produto.id}`}><Excluir/></Link></td>
                        </tr>
                    ))}

                </table>

            </div>
        </>
    )
}
