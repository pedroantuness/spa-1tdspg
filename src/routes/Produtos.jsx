import { Link } from "react-router-dom";
// import { ListaProdutos } from "../components/ListaProdutos";
import { AiOutlineEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import classes from "./Produtos.module.css";
import { useEffect, useState } from "react";
import ModalExemplo from "../components/ModalExemplo/ModalExemplo";

export default function Produtos() {
    document.title = "Produtos";

    const [novaListaProdutos, setNovaListaProdutos] = useState([{}]);

    // useEffect(() => {
    //     setNovaListaProdutos(ListaProdutos);
    //     console.log("UseEffect que renderiza apenas uma vez!")
    // }, [ ]);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(!open){

            
            // fetch = API do Javascript para realizar rquisições/requests, utiliza como parâmetro uma URL ou URI.
            // fetch(http://minhaApi.com.br/exemplos)
            fetch("http://localhost:5000/produtos", {
                method: "GET",
                headers:{
                    "Content-Type" : "application/json"
                }
            })
            .then((response) => response.json())
            .then((data) => {
                setNovaListaProdutos(data);
            })
            .catch(error => console.log(error))      
        }
    }, [open]);

    return(
        <>
            <div>
                <h1>Produtos</h1>

                { open ? <ModalExemplo open={open} setOpen={setOpen}/> : "" }
                <Link onClick={() => setOpen(true)}>Adicionar Produto</Link>

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


