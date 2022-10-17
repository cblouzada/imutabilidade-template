import { EstilizacaoDoCarro } from "../styledCarro";

function Carro(props) {
  return (
    <div>
      <EstilizacaoDoCarro>
        <h2>Volksvagem</h2>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>adicionadoPor: {props.adicionadoPor}</li>
        <button onClick={props.trocaCarro}> Mudar Carro</button>
        {/* <button onClick={props.trocaCarro2}> Mudar Carro 2</button> */}
      </EstilizacaoDoCarro>
    </div>
  );
}

export default Carro;
