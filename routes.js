import { Router } from 'express';
import StudentController from './src/app/controllers/StudentController';

const router = Router();

router.post('/student', StudentController.store);
router.get('/student/:id', StudentController.show);
router.get('/student', StudentController.index);
router.put('/student/:id', StudentController.update);
router.delete('/student/:id', StudentController.delete);

export default router;
