import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function EditarProdutos() {

    document.title = "Editar Produtos";

    //Recuperando o id do produto com o HOOK useParam();
    const {id} = useParams();

        //Utilizando o filter na lista de produtos para recuperar um produto através do id como parametro
        const prodRecuperadoPorId = ListaProdutos.filter( (produto) => {
            if(produto.id == id){
                return produto;
            }
        });

        const handlerEditarProduto = (event) => {
            event.preventDefault();
        }

    return(
        <>
            <div>
                <h1>EDITAR-PRODUTOS</h1>
                <form action="#" method="get">
                <fieldset>
                    <legend>EDITAR PRODUTO</legend>
                    <div>
                        <label htmlFor="idProduto">Nome Produto:</label>
                        <input type="text" name="nomeProduto" id="idProduto" value={prodRecuperadoPorId[0].nome} onChange={handlerEditarProduto} contentEditable="false"  />
                    </div>
                    <div>
                        <button >EDITAR</button>
                    </div>
                </fieldset>
                </form>
            </div>
        </>
    )
}