import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

export function* createResident({ payload }) {
  try {
    const { name, birtday, phone, cpf, email, apartment_id } = payload;

    yield call(api.post, 'tenants', {
      name,
      birtday,
      phone,
      cpf,
      email,
      apartment_id,
    });

    history.push(`/residents/${apartment_id}`);
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');
  }
}

export default all([
  takeLatest('@apartment/CREATE_RESIDENT_REQUEST', createResident),
]);
