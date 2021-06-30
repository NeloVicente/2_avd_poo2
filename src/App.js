import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Button from "./Componets/Button/index";
import Form from './Componets/Form';
import * as S from './App.styles';
import api from "./service/Api";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => MostrarUsuarios(), [usuarios]);

  async function MostrarUsuarios() {
    await api.get("/events").then((response) => {
      setUsuarios(response.data);
    });
  }

  async function deletarUsuario(id) {
    await api
      .delete(`events/${id}`)
      .then(() => {
        alert('Evento Deletado')
      })
      .catch(() => {
        alert("Não foi possível deletar o Evento");
      });
  }

  async function likeEvento(id) {
    await api
      .post(`events/like/${id}`)
      .then(() => {
        alert('Você deu like no Evento')
      })
      .catch(() => {
        alert("Não foi possível dar like no Evento");
      });
  }
  async function deslikEvento(id) {
    await api
      .post(`events/dislike/${id}`)
      .then(() => {
        alert("Você deu deslike no Evento ");
      })
      .catch(() => {
        alert("Não foi possível dar deslike no Evento");
      });
  }
 
 
  const history = useHistory();
  const goTotal = () => history.push('/total');

  return (
    <S.Container>
      <S.Header>
        <S.Title> Lista</S.Title>
        <S.Figure>
          <S.Image src={'data:image/png;base64,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'} alt="Github logo" />
        </S.Figure>
      </S.Header>
      <S.Box>
        <Form
          MostrarUsuarios={MostrarUsuarios}
        />
      </S.Box>
      <S.Table >
        < tbody >
          <tr>
            <th>Nome evento</th>
            <th>Local</th>
            <th>Dia da semana</th>
            <th>Horario</th>
            <th>Like</th>
            <th>Deslike</th>
            <th>Excluir</th>
          </tr>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td> {usuario.nomeevento}</td>
              <td>{usuario.local}</td>
              <td>{usuario.diasemana}</td>
              <td>{usuario.horario}</td>
              <td><Button  background ={'#013ADF'} onClick={() => likeEvento(usuario.id)}>Like {usuario.like}</Button></td>
              <td><Button  background ={'#FFFF00'} onClick={() => deslikEvento(usuario.id)}>Deslike {usuario.dislike}</Button></td>
              <td><Button  background ={'#DF0101'} onClick={() => deletarUsuario(usuario.id)}>Excluir</Button></td>
            </tr>

          ))}
        </tbody >
      </S.Table>
      <Button  background ={'#089'} onClick={() => goTotal()}>Total</Button>
    </S.Container >
  );
}

export default App;
