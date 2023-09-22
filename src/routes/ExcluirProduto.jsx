import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function ExcluirProduto() {

    document.title = "Excluir Produto";

    const {id} = useParams();
    const navigate = useNavigate();
    
    const produtoObj = ListaProdutos.filter(item => item.id == id)[0];

    const [produto] = useState(produtoObj);

    const handleDelete = () =>{

      //indice que será utilizado para a exclusao do produto na lista
      let indice;

      //Localização do indice na lista
      ListaProdutos.forEach((item, index) => {
          if(item.id == produto.id){
              indice = index
          }            
      });

      //Excluindo o produto da lista com splice
      ListaProdutos.splice(indice, 1);
      alert("Produto Excluido com sucesso!")

      //Redirecionando o usuario para a lista de produtos
      navigate("/produtos");

    }

  return (
    <>
      <h1>Excluir - Produto</h1>
      <div>
        <h2>{`Deseja mesmo excluir o produto ${produto.nome}?`}</h2>
        <div>
          <button onClick={handleDelete}>Excluir</button>
          <button onClick={() => navigate("/produtos")}>Cancelar</button>
        </div>
      </div>
    </>
  )
}
