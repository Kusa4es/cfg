const cluster = require('cluster');
const os = require('os');
const chalk = require('chalk');

const pid = process.pid;

if (cluster.isMaster) {
    const countCore = os.cpus().length;
    console.log(chalk.yellow(`Total core CPU: ${countCore}`));
    console.log(chalk.green(`Master started. Pid: ${pid}`));

    cluster.fork();
    for(let i = 0; i < countCore-1; i++){
       cluster.fork();           
    }
    cluster.on('exit', (server, code) => {
        console.log(chalk.red(`Server stopped! Pid: ${server.process.pid}. Code: ${code}`));
        if(code === 1){
            cluster.fork(); 
        }         
    });   
  
}else if (cluster.isWorker) {
   require('./server.js');    
}