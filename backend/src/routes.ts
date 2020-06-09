import { Router } from 'express';
import UsersControllers from './controllers/UserController'

const routes = Router();

routes.get('/users', UsersControllers.index )
routes.post('/users/create', UsersControllers.create )


export default routes;