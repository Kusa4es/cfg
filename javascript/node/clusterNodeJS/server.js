const http = require('http');
const pid = process.pid;

const server = http.createServer((req, res) => {
        for (let i = 0; i < 10000000; i++) {}// 10 million 
        res.end(`Heyyy!`);
    })
    .listen(3000, () => {
        console.log(`Server started. Pid: ${pid}`);
    });

process.on('SIGINT', () => {
    console.log('Signal is SIGINT');
    server.close(()=>{
        process.exit(0);
    });
});

process.on('SIGHUP',() =>{
    console.log('Signal is SIGHUP');
    server.close(()=>{
        process.exit(1);
    });
})


