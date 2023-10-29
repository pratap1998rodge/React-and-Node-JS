module.exports = {
    //this parameters are for MySQL connection.
    HOST: "localhost",
    USER: "root",
    PASSWORD: "pass",
    DB: "pratap",
    dialect: "mysql",

    //pool is optional, it will be used for Sequelize connection pool configuration:
    pool: {
      //maximum number of connection in pool  
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };    