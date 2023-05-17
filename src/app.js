import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

// Routes
import allRoutes from "./routes/all.route";

const app = express();

// Settings
app.set("port",  4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/", allRoutes);


export default app;