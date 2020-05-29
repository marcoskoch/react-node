import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import apartment from './apartment/sagas';
import resident from './resident/sagas';

export default function* rootSaga() {
  return yield all([auth, user, apartment, resident]);
}
