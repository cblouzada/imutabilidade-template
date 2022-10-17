import {useState} from "react"
import Garagem from "./Componentes/GaragemOne/Garagem";
import { GlobalStyled } from "./globalStyled";


export default function App() {

  // const nome = "Turma";
  const [nome, setNome] = useState("Turma")



  function apresentaGaragem() {

    alert(`Boas vindas à garagem de ${nome}`);
    console.log("nome:".nome)
  }

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem
      nome={nome} 
      mensagemAprentacao={apresentaGaragem}
      setNome={setNome}
      />
    </div>
  );
}
