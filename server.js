const express =  require('express')
const cors =  require('cors')
const { urlencoded } = require('express')
const app = express()

//If you configure the domain name in the origin -
//the server will allow CORS from the configured domain. 
//So the API will be accessible from http://localhost:8080 in our case and blocked for other domains.
var corOptions = {
    origin:'http://localhost:8080'
}


//middleware
app.use(cors(corOptions))
app.use(express.json())
//You NEED express.json() and express.urlencoded() for POST and PUT requests,
//because in both these requests you are sending data (in the form of some data object)
//to the server and you are asking the server to accept or store that data (object),
// which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request

//express.json() ---------------> recognize the incoming Request Object as a JSON Object
//express.urlencoded() --------------> recognize the incoming Request Object as a strings or arrays

//Alternative method is using body parser
//incoming Request Object if object, with nested objects, or generally any type.
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlencoded({urlencoded:true}))

//routers

const router = require('./routes/productRoutes')
app.use('/api/products',router)

//testing api

app.get('/',(req,res)=>{
    res.json({message:'Hello From Api'})
})

//port

const PORT =  process.env.PORT || 8080

//server

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

