import { Router } from 'express';
import usersController from '../controllers/users.controller.js';
import logger from '../logger.js';
const router = Router();

router.use((req, res, next) => {
    logger.http(`[${req.method}] ${req.originalUrl}`);
    next();
});

router.get('/',usersController.getAllUsers);

router.get('/:uid',usersController.getUser);
router.put('/:uid',usersController.updateUser);
router.delete('/:uid',usersController.deleteUser);


export default router;