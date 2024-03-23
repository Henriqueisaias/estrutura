const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});


try{
    sequelize.authenticate();
    console.log("conectou ao banco");
}catch(err){
    console.log(err);
}

module.exports = sequelize