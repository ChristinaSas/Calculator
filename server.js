var express=require('express');
var app=express();

app.use(express.static(__dirname));
app.get('/',function(res,req){
	res.sendFile(__dirname+'/index.html');
})


app.listen(process.env.PORT||8080);
console.log('Run Server!');