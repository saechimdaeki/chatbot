const sayHello = require('app').sayHello;

if(sayHello){
	console.log('sayhello should return "hello"');
	if(sayhello()=='hello') {
		console.log('success');
	}
	else{
		console.log('fail');
	}
}
