const http = require('http');
const server = http.createServer((req, res) => {
    const param = req.url.substring(1);
    var x =  (1 + Math.sqrt(5))/2
	var fib = Math.round((Math.pow(x, param)- Math.pow(-(1/x), param))/Math.sqrt(5));
	var fiboNoRec = fibo(param);
	
    res.end(
	'Fibonachi member No. '+param.toString()+' is:'+'\n'+
	'Using formula: '+fib.toString()+'\n'+
	'Using algorithm:'+ fiboNoRec.toString()+'\n'+
	'Both numbers matching: '+Boolean(fib==fiboNoRec)
	
	);
});
server.listen(3003, '127.0.0.1');

function fibo(n){
 if(n <= 1){
  return n;
 }
 var fibo = 1;
 var fiboPrev = 1;
 for(var i = 2; i < n; ++i){
  var temp = fibo;
  fibo += fiboPrev;
  fiboPrev = temp;
 }
 return fibo;
}
