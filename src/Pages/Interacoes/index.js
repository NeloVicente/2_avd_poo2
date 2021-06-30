import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Button from "../../Componets/Button";
import * as S from './Interacaoes.styles';
import api from "../../service/Api";

const Interacoes = () => {
  const [eventos, setEventos] = useState([]);

  const history = useHistory();
  useEffect(() => MostrarUsuarios(), []);

  async function MostrarUsuarios() {
    await api.get("/events").then((response) => {
      setEventos(response.data);
    });
  };
  console.log(eventos.length);
  const goHome = () => history.push('/');

  return (
    <S.Container>
      <S.Header>
        <S.Title>Total</S.Title>
      </S.Header>
      <S.Box>
      </S.Box>
      <S.Table >
        < tbody >
          <tr>
           <th>Quantidade de efentos</th>
            <th>Local</th>
            <th>Dia da semana</th>
          </tr>
            <tr >
              <td> {eventos.length}</td>
              <td>aaa</td>
              <td>aaaa</td>
            </tr>
        </tbody >
      </S.Table>
      <Button  background ={'#089'} onClick={() => goHome()}>Home</Button>
    </S.Container >
  );
}

export default Interacoes;
