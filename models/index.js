const dbConfig = require('../config/dbConfig');
const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.host,
        dialect:dbConfig.dialect,
        operatorsAliases:false,

        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }
)
sequelize.authenticate()
.then(()=>{
    console.log('conected............')
})
.catch((err)=>{
    console.log('Error'+err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize,DataTypes)
db.reviews = require('./reviewtModel.js')(sequelize,DataTypes)

//To hold the database value
db.sequelize.sync({force:false})
.then(()=>{
    console.log('yes re-sync done!!!!')
})

module.exports = db;