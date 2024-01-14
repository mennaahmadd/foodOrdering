import express from 'express';
import App from './services/ExpressApp';
import dbConnection from './services/Database';
import { PORT } from './config';

// const app = express();

// app.use('/', (req, res)=>{
//     return res.json('hello from food order backend!')
// })

// app.listen(8000, () => {
//     console.log('App is listening to the port 8000');
// })
onst StartServer = async () => {

    const app = express();

    await dbConnection()

    await App(app);

    app.listen(PORT, () => {
        console.log(`Listening to port 8000 ${PORT}`);
    })
}

StartServer();