import React, { useState } from "react";
import * as S from './Form.style';
import api from "../../service/Api";

const Form = () => {


    const [nomeevento, setNomeevento] = useState('');
    const [local, setLocal] = useState('');
    const [diasemana, setDiasemana] = useState('');
    const [horario, setHorario] = useState('');



    const CriarUsuario = async (e) => {
        e.preventDefault();
        setNomeevento('');
        setLocal('');
        setDiasemana('');
        setHorario('');
        await api.post('/events', {
            nomeevento: nomeevento,
            local: local,
            diasemana: diasemana,
            horario: horario,


        })
            .then(() => {
                alert('Evento cadastrado com sucesso!');
            })
            .catch(() => alert('Falha ao cadastrar Evento!'));
    }

    return (
        <>
            <S.Title> <S.Cadas>Cadastro de um novo Evento</S.Cadas> </S.Title>
            <form
                onSubmit={CriarUsuario}
            >
                <S.Input
                    type="text"
                    required
                    placeholder="Escreva nome do evento"
                    id="nomeevento"
                    name="nomeevento"
                    value={nomeevento}
                    onChange={(e) => setNomeevento(e.target.value)} />

                <S.Input
                    type="tel"
                    required
                    id="local"
                    placeholder="Escreva local do evento"
                    name="local"
                    value={local}
                    onChange={(e) => setLocal(e.target.value)} />

                <S.Input
                     type="date" 
                    required
                    id="diasemana"
                    placeholder="Escreva dia das emana"
                    name="diasemana"
                    value={diasemana}
                    onChange={(e) => setDiasemana(e.target.value)} />

                     <S.Input
                    type="time"
                    required
                    id="horario"
                    placeholder="Escreva horario"
                    name="horario"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)} />
                        
                <S.Button type='submit' variant='contained' >{'Cadastrar'}</S.Button>
            </form>
        </>
    );
};

export default Form;
