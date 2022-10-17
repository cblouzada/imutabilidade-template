import Carro from "./Carro";
import { Button, EstilizacaoDaGaragem } from "../styledGaragem";
import {useState} from  "react"


function Garagem(props) {

  const [automovel, setAutomovel] = useState({cor: "Vermelho" , ano: 2002, flex: "sim"})
  const [automovel2, setAutomovel2] = useState({cor: "Vermelho" , ano: 2002, flex: "sim"})
  const [automovel3, setAutomovel3] = useState({cor: "Vermelho" , ano: 2002, flex: "sim"})
  const [automovel4, setAutomovel4] = useState({cor: "Vermelho" , ano: 2002, flex: "sim"})

  const mudaNomeGaragem = () => {
    props.setNome("Ammal")
    console.log("Clicou", props.nome);

  }

  const trocaCarro = () =>{
    const novoCarro = {
      cor: "Azul",
      ano: 2022,
      flex: "sim"
    }
    setAutomovel(novoCarro)
  }

  const trocaCarro2 =() => {
    const novoCarro2 = {
    cor: "Amarelo",
    ano: 2040,
    flex:"não"
  }
  setAutomovel2(novoCarro2)
}

const trocaCarro3 =() => {
  const novoCarro3 = {
  cor: "Branco",
  ano: 2100,
  flex:"sim"
}
setAutomovel3(novoCarro3)
}

const trocaCarro4 =() => {
  const novoCarro4 = {
  cor: "Cinza",
  ano: 2000,
  flex:"não"
}
setAutomovel4(novoCarro4)
}

  return (
    <EstilizacaoDaGaragem>
      <h1>Garagem da {props.nome}</h1>
      <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      <button onClick={mudaNomeGaragem}>MudaNome</button>

      <Carro
        adicionadoPor={props.nome}
        cor={automovel.cor}
        ano={automovel.ano}
        flex={automovel.flex}
        trocaCarro={trocaCarro}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel2.cor}
        ano={automovel2.ano}
        flex={automovel2.flex}
        trocaCarro={trocaCarro2}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel3.cor}
        ano={automovel3.ano}
        flex={automovel3.flex}
        trocaCarro={trocaCarro3}
      />
      <Carro
       adicionadoPor={props.nome}
        cor={automovel4.cor}
        ano={automovel4.ano}
        flex={automovel4.flex}
        trocaCarro={trocaCarro4}
       /> 
    </EstilizacaoDaGaragem>
  );
}

export default Garagem;
