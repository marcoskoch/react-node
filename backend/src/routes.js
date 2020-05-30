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
routes.get('/apartments/:id', ApartmentController.find);
routes.post('/apartments', ApartmentController.store);
routes.put('/apartments', ApartmentController.update);
routes.delete('/apartments/:id', ApartmentController.delete);

routes.get('/tenants', TenantController.index);
routes.get('/tenants/:id', TenantController.find);
routes.post('/tenants', TenantController.store);
routes.put('/tenants', TenantController.update);
routes.delete('/tenants/:id', TenantController.delete);

export default routes;
