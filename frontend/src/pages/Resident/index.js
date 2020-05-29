import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';

import { createResidentRequest } from '~/store/modules/resident/actions';

function Resident() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const schema = Yup.object().shape({
    name: Yup.string().required('O bloco é obrigatório'),
    birtday: Yup.string().required('O bloco é obrigatório'),
    phone: Yup.string().required('O bloco é obrigatório'),
    cpf: Yup.string().required('O bloco é obrigatório'),
    email: Yup.string().required('O bloco é obrigatório'),
  });

  function handleSubmit(data) {
    data.apartment_id = id;
    dispatch(createResidentRequest(data));
  }

  return (
    <Container>
      <header>
        <h1>Cadastrar morador</h1>
      </header>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome do morador responsável" />
        <Input name="birtday" type="date" placeholder="Data de nascimento" />
        <Input name="phone" placeholder="Telefone" />
        <Input name="cpf" placeholder="CPF" />
        <Input name="email" type="email" placeholder="Email" />

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}

export default Resident;
