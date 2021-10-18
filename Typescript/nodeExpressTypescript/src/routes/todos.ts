import { Router } from 'express';
import { createTodo, deleteTodo, getTodo, updateTodo } from '../controllers/todos';

/* 
 *   Routes with differents methods to access    
 */
const router = Router();

router.post('/', createTodo);

router.get('/',getTodo);

router.patch('/:id', updateTodo)

router.delete('/:id', deleteTodo)

export default router;