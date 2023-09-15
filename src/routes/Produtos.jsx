import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { AiOutlineEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import classes from "./Produtos.module.css";
import { useEffect, useState } from "react";

export default function Produtos() {

    const [counter, setCounter] = useState(0);
    const [novaListaProdutos, setNovaListaProdutos] = useState([{}]);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        console.log("useEffect que renderiza sempre!")
    });

    useEffect(() => {
        setNovaListaProdutos(ListaProdutos);
        console.log("UseEffect que renderiza apenas uma vez!")
    }, [ ]);

    useEffect(() => {
        console.log("UseEffect que renderiza apenas se o objeto/elemento/constante que esta sendo monitorado no array de dependencias sofrer atualização!")
    }, [counter2]);
    

    return(
        <>
            <div>
                <h1>Produtos</h1>

                <div>
                    <button onClick={() => setCounter(counter + 1)}>COUNTER - {counter}</button>
                </div>
                <div>
                    <button onClick={() => setCounter2(counter2 + 1)}>COUNTER2 - {counter2}</button>
                </div>

                <table className={classes.tabelaProd}>

                    <thead className={classes.tabelaCabecalho}>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>IMG</th>
                            <th><Editar/> / <Excluir/></th>
                        </tr>
                    </thead>
                    <tbody className={classes.tabelaCorpo}>
                        {novaListaProdutos.map( (produto, indice) => (
                            <tr className={classes.tabelaLinha} key={indice}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.desc}</td>
                                <td>{produto.preco}</td>
                                <td><img src={`${produto.img}`} alt={`${produto.desc}`}/></td>
                                <td><Link to={`/editar/produto/${produto.id}`}><Editar/></Link> / 
                                <Link to={`/excluir/produto/${produto.id}`}><Excluir/></Link></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className={classes.tabelaRodape}>
                        <tr>
                            <td colSpan={6}>Produtos informáticos - QTD = {novaListaProdutos.length}</td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        </>
    )
}


