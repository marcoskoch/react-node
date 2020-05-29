import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

export function* createApartment({ payload }) {
  try {
    const { number, block, name, birtday, phone, cpf, email } = payload;

    yield call(api.post, 'apartments', {
      number,
      block,
      tenant: {
        name,
        birtday,
        phone,
        cpf,
        email,
      },
    });

    history.push('/apartments');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');
  }
}

export function* updateApartment({ payload }) {
  try {
    const { id, number, block } = payload;

    yield call(api.put, 'apartments', {
      id,
      number,
      block,
    });

    history.push('/apartments');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');
  }
}

export default all([
  takeLatest('@apartment/CREATE_APARTMENT_REQUEST', createApartment),
  takeLatest('@apartment/UPDATE_APARTMENT_REQUEST', updateApartment),
]);
