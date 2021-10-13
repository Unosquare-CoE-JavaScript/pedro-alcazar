
import express, {Request, Response, NextFunction} from 'express';
import todoRoutes from './routes/todos';

/* 
 *   Server Set up
 */
const app = express();

// Accessing to middleware and controller
app.use('/todos', todoRoutes);

app.use((err: Error,req: Request,res: Response, next: NextFunction) =>{
    res.status(500).json({message: err.message})
})
//Port to Listen
app.listen(3000)