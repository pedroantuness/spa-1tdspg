import { useState } from "react";
import style from "./ModalExemplo.module.css"

export default function ModalExemplo(props) {

    document.title = "Cadastrar";

    let novoID;

    fetch("http://localhost:5000/produtos", {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        novoID = data[data.length - 1].id + 1
    })
    .catch((error) => console.log(error));

    const [produto, setProduto] = useState({
        id: novoID,
        nome: "",
        preco:"",
        desc:"",
        img:""
    });

    const handleChange = (e) => {
        e.preventDefault();
        const{name, value} = e.target;
        setProduto({...produto,[name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/produtos", {
            method:'POST',
            headers:{
                "Content-type":"application/json"
                }, 
            body: JSON.stringify(produto)
        })
        .then((response) => {
            console.log("Status da requisição HTTP: " + response.status);
            return response.json();
        })
        .then((data) => console.log(data))
        .catch(error => console.log(error));
        props.setOpen(false);
    }

    if(props.open){
        return(
            <div className={style.container}>
                <h1>Cadastrar Produto</h1>
                <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Novo produto</legend>
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
                        <button>Cadastrar</button>
                    </div>
                </fieldset>
                </form>
            </div>
        )
    }
}