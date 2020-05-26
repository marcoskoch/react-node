import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ApartmentController from './app/controllers/ApartmentController';
import TenantController from './app/controllers/TenantController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/apartments', ApartmentController.index);
routes.post('/apartments', ApartmentController.store);
routes.delete('/apartments/:id', ApartmentController.delete);

routes.get('/tenants/:apartmet_id', TenantController.index);
routes.post('/tenants', TenantController.store);
routes.delete('/tenants/:id', TenantController.delete);

export default routes;
