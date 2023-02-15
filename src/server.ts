import 'dotenv/config';
import cors from 'cors';
import express from 'express';

// My Imports
import { router } from './routes';
import dbConnection from "./database/mongo.db";

class Server {

    private app: express.Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = parseInt(process.env.PORT || '3000', 10);
        this.connecionDB();
        this.middleware();
        this.routes();
    }

    private async connecionDB(){
        await dbConnection();
    }

    private middleware(): void {
        this.app.use(cors())
        this.app.use( express.json())
        this.app.use( express.static("dist/storage"));
    }
    
    private routes(): void {
        this.app.use(router);
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on the port: ${this.port}`);
        });
    }
}

const server = new Server();
server.start();