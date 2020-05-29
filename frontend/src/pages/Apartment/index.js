import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';

import { createApartmentRequest } from '~/store/modules/apartment/actions';

function Apartment() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    number: Yup.number()
      .positive()
      .typeError('Deve ser um número')
      .integer()
      .required('O número é obrigatório'),
    block: Yup.string().required('O bloco é obrigatório'),
    name: Yup.string().required('O bloco é obrigatório'),
    birtday: Yup.string().required('O bloco é obrigatório'),
    phone: Yup.string().required('O bloco é obrigatório'),
    cpf: Yup.string().required('O bloco é obrigatório'),
    email: Yup.string().required('O bloco é obrigatório'),
  });

  function handleSubmit(data) {
    dispatch(createApartmentRequest(data));
  }

  return (
    <Container>
      <header>
        <h1>Cadastrar apartamento</h1>
      </header>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="number" placeholder="Número do apartamento" />
        <Input name="block" placeholder="Bloco" />

        <hr />

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

export default Apartment;
