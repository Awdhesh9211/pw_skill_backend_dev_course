const http=require("http");


const server=http.createServer((req,res)=>{
    if(req.url=="/hello"){
        res.end("HelloWrld");
    }else{
        res.end("Wrong Endpoint ");
    }
})

server.listen(8080,()=>{
    console.log("Server Is Started...");
})