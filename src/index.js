import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import userRouter from './routes/userRoutes.js';

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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});