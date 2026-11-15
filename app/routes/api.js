import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import MotorcycleController from '../controllers/motorcycleController.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)
router.delete('/users/:id', [verifyToken], UserController.destroy)

router.get('/motorcycles', MotorcycleController.index);
router.get('/motorcycles/:id', MotorcycleController.show);
router.post('/motorcycles', MotorcycleController.store);
router.put('/motorcycles/:id', MotorcycleController.update);
router.delete('/motorcycles/:id', MotorcycleController.destroy);

export default router
