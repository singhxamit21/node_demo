const db = require('../models')

//create main Model
const Product = db.products
const Review = db.reviews

const addProduct = async(req,res)=>{
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        publish: req.body.publish ? req.body.publish : false,
        phone: req.body.phone
        
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}

//get all products
const getAllProducts = async(req,res) => {
    let products = await Product.findAll({order: 'follower DESC'})
    res.status(200).send(products)
}

//get specific products
// const getAllProducts = async(req,res) => {
//     let products = await Product.findAll({
//         attributes:[
//             'title',
//             'price'
//         ]
//     })

//     res.status(200).send(products)
// }

//get single product 
const getOneProduct = async(req,res) => {
    let id = req.params.id
    let product = await Product.findOne({where:{id:id}})
    res.status(200).send(product)
}

//get update product
const updateProduct = async (req,res) => {
    let id = req.params.id
    const product = await Product.update(req.body,{where:{id:id}})
    res.status(200).send(product)
}

//delete product by id
const deleteProduct = async (req,res) => {
    let id = req.params.id
    await Product.destroy({where:{id:id}})
    res.status(200).send('Product is deleted')
}

//published product
const getPublishedProducts = async(req,res) => {
    let products = await Product.findAll({where:{publish: true}})
    res.status(200).send(products)
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProducts
}