const fs=require("fs");

const dataAsync=fs.readFileSync("a.txt","utf-8");

console.log(dataAsync);
fs.readFile("a.txt","utf-8",(err,data)=>{
    if(err) throw Error("pp");
    console.log(data);
    
})




