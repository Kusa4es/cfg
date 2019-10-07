import  express  from 'express';
import next from 'next';
import { environment } from './configuration/environment';

const port = environment.port;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare().then(() => {    
    const server = express();
    server.get('*', (req:any, res:any) => {       
        return handle(req, res);
    });
    server.listen(port, (err:any) => {        
        if (err) throw err
        console.log( 
            '🚀 Apollo-client and NEXT.JS ready at',
            `http://localhost:${port}`)
    })
});
