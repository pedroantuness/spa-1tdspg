import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";

export default function App() {

  //Area Declarativa (antes do return)
  let meuNome = "Pedro";

  return (
    <>

      {/* Area Imperativel (dentro do return) */}
      <div className="container"> 

        <Cabecalho nomeDoUsuario={meuNome}>
        
        </Cabecalho>

        <Conteudo/>

        <Rodape/>

      </div>

    </>
  )

}
