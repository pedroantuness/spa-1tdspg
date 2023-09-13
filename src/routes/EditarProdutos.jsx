import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function EditarProdutos() {
    
    document.title = "Editar Produtos";

    const navigate = useNavigate();

    //Recuperando o id do produto com o HOOK useParam();
    const {id} = useParams();

        //Utilizando o filter na lista de produtos para recuperar um produto através do id como parametro
        const prodRecuperadoPorId = ListaProdutos.filter(produto => produto.id == id);

        const [produto, setProduto] = useState({
            id: prodRecuperadoPorId[0].id,
            nome: prodRecuperadoPorId[0].nome,
            preco: prodRecuperadoPorId[0].preco,
            desc: prodRecuperadoPorId[0].desc,
            img: prodRecuperadoPorId[0].img
        });

        

        const handleChange = (event) => {
            // Destructuring
            const{name, value} = event.target;
            // Inserir os dados no objeto produto atraves do setProduto(...)
            setProduto({...produto, [name] : value});
        }


        const handleSubmit = (event) => {
            event.preventDefault();

            //indice que será utilizado para a sobreposição do produto na lista
            let indice;

            //Localização do indice na lista
            ListaProdutos.forEach((item, index) => {
                if(item.id == produto.id){
                    indice = index
                }            
            });

            // Utilizando o metodo splice para alterar o produto no indice especificado
            ListaProdutos.splice(indice, 1, produto);
            alert("Produto Alterado!");

            navigate("/produtos");

        }


    return(
        <>
            <div>



                <h1>EDITAR-PRODUTOS</h1>
                <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>EDITAR PRODUTO</legend>
                    <div>
                        <label htmlFor="idProduto">Nome Produto:</label>
                        <input type="text" name="nome" id="idProduto" value={produto.nome} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="idProduto">Preço produto:</label>
                        <input type="text" name="preco" id="idProduto" value={produto.preco} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="idProduto">Descrição produto:</label>
                        <input type="text" name="desc" id="idProduto" value={produto.desc} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="idProduto">Imagem produto:</label>
                        <input type="text" name="img" id="idProduto" value={produto.img} onChange={handleChange} />
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
