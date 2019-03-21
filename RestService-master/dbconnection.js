var mysql=require('mysql');

// dev only
var connection= mysql.createPool({
	host: process.env.DATABASE_HOST || '127.0.0.1',
	user:'root',
	password:'123',
	database:'mikeDemo'
}); 

/*
// on amazon rds with read replica
var connection= mysql.createPool({
	host: 'mikedemo.cll7wpho1idy.us-east-1.rds.amazonaws.com',
	user:'root',
	password:'password123',
	database:'mikeDemo',
	ssl: 'Amazon RDS' ,
	port: 3306,
	acquireTimeout: 1000000,
	connectionLimit: 10 // default is 10000 fix handshake error
}); */

module.exports=connection;

