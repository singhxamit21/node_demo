module.exports = (sequelize,DataTypes) => {

    const Product = sequelize.define("product",{
        title: {
            type: DataTypes.STRING,
            //mandatory field
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        publish: {
            type: DataTypes.BOOLEAN
        },
        phone: {
            type: DataTypes.INTEGER,
            unique: true
        }

    })

    return Product
}