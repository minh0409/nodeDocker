var mysql=require('mysql');
var connection= mysql.createPool({
	host: process.env.DATABASE_HOST || '127.0.0.1',
	user:'root',
	password:'123',
	database:'mikeDemo'
});
module.exports=connection;

