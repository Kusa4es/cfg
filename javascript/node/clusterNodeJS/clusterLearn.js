const cluster = require('cluster');
const os = require('os');
const pid = process.pid;

if (cluster.isMaster) {
    const countCore = os.cpus().length;
    console.log(`total core: ${countCore}`);
    console.log(`Master started. Pid: ${pid}`);
    cluster.fork();
    for(let i = 0; i < countCore-1; i++){
        const server = cluster.fork();
        server.on('exit', () => {
            console.log(`server stopped!!! Pid: ${server.process.pid}`);
            cluster.fork();
        });
        server.send("hello from server!");
        server.on('message', (msg) => {
            console.log(`message from server --- ${server.process.pid} : ${msg}`);
        });
    }
  
}else if (cluster.isWorker) {
   require('./server.js');
   process.on('message', (msg) => {
        console.log(`Message from master: ${msg}`)
   });
   process.send(`hello from master. Pid: ${pid}`)
}