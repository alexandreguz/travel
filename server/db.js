import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kts0thachoshen',
    database: 'vacationsApp'
  });
  
export default connection