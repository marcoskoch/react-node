import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '~/services/api';

import { Container } from './styles';

import { updateApartmentRequest } from '~/store/modules/apartment/actions';

function ApartmentEdit() {
  const dispatch = useDispatch();
  const [apartment, setApartment] = useState({});
  const { id } = useParams();

  const schema = Yup.object().shape({
    number: Yup.number()
      .positive()
      .typeError('Deve ser um número')
      .integer()
      .required('O número é obrigatório'),
    block: Yup.string().required('O bloco é obrigatório'),
  });

  useEffect(() => {
    async function loadApartment() {
      const response = await api.get(`apartments/${id}`);

      const { number, block } = response.data;

      setApartment({ number, block });
    }

    loadApartment();
  }, []);

  function handleSubmit(data) {
    dispatch(updateApartmentRequest({ id, ...data }));
  }

  return (
    <Container>
      <header>
        <h1>Edição do apartamento</h1>
      </header>
      <Form initialData={apartment} schema={schema} onSubmit={handleSubmit}>
        <Input name="number" placeholder="Número do apartamento" />
        <Input name="block" placeholder="Bloco" />

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}

export default ApartmentEdit;
