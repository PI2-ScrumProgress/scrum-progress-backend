import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Models import
import './models/userModel.js';
import './models/tasksModel.js';
import './models/userStoriesModel.js';
import './models/backlogAssignmentsModel.js';
import './models/projectsModel.js';
import './models/usersProjectsModel.js';
import './models/backlogElementsModel.js';

// Routes import
import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';
import userStoryRouter from './routes/userStoryRoutes.js';
import backlogAssignmentRouter from './routes/backlogAssignmentRoutes.js';

// Database connection
import sequelize from './config/database.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = { origin: process.env.CLIENT_URL || 'http://localhost:3000', credentials: true };

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

app.use("/", express.static(join(__dirname, "public")));
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/user-stories', userStoryRouter);
app.use('/api/backlog-assignments', backlogAssignmentRouter);

async function main() {
    try {
        await sequelize.sync({ alter: true });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();

