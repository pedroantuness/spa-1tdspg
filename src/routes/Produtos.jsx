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

                    <thead>
                        <tr>
                            <th className={classes.tabelaCabecalho}>ID</th>
                            <th className={classes.tabelaCabecalho}>Nome</th>
                            <th className={classes.tabelaCabecalho}>Descrição</th>
                            <th className={classes.tabelaCabecalho}>Preço</th>
                            <th className={classes.tabelaCabecalho}>IMG</th>
                            <th className={classes.tabelaCabecalho}><Editar/> / <Excluir/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {novaListaProdutos.map( (produto, indice) => (
                            <tr className={classes.tabelaLinha} key={indice}>
                                <td className={classes.tabelaDados}>{produto.id}</td>
                                <td className={classes.tabelaDados}>{produto.nome}</td>
                                <td className={classes.tabelaDados}>{produto.desc}</td>
                                <td className={classes.tabelaDados}>{produto.preco}</td>
                                <td className={classes.tabelaDados}><img className={classes.tblImg} src={`${produto.img}`} alt={`${produto.desc}`}/></td>
                                <td className={classes.tabelaDados}><Link to={`/editar/produto/${produto.id}`}><Editar/></Link> / 
                                <Link to={`/excluir/produto/${produto.id}`}><Excluir/></Link></td>
                            </tr>
                        ))}
                    </tbody>
                    {/* <tfoot>
                        <td colSpan={6}>PRODUTOS</td>
                    </tfoot> */}
                </table>

            </div>
        </>
    )
}


