import express from "express";
import cors from "cors";
import donationRouter from "./view/donationRouter.js";
import { errorMiddleWare } from "./middleware/error.js";
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:[process.env.FRONTEND_URL],
        methods:["GET","POST","PUT","DELETE","PATCH"],
        credentials:true,
    }
))
app.use('/api/v1',donationRouter);
app.use(errorMiddleWare);
export default app;