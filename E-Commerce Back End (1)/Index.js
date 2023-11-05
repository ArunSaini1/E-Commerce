const express = require("express");
const cors = require('cors')
require("./db/config");
const User = require("./db/User");
const Product = require('./db/Product')
const app = express();


app.use(express.json());
app.use(cors())



// Register Api
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.Password;
  resp.send(result);
});



// Login Api
app.post('/login',async(req,resp)=>{
    console.log(req.body);
    if(req.body.Password && req.body.Email)
    {

            let user = await User.findOne(req.body).select('-Password')
    if(user){
  resp.send(user)
}else{
    resp.send({result:'No User Found'})
}  
    }
    else{
        resp.send({result:'No User Found'})
    }

})




// Post Api
app.post('/add-product',async(req,resp)=>{
    let product = new Product(req.body)
    let result = await product .save();
    resp.send(result)
})



// Get Api
app.get('/products',async(req,resp)=>{
    let products = await Product.find();
    if(products.length>0)
    {
        resp.send(products)
    }else{
        resp.send({result : "No Product Found"})
    }

})



// Delete Api
app.delete('/product/:id',async(req,resp)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    resp.send(result);
})



// Update Api
app.get('/product/:id',async(req,resp)=>{
    let result = await Product.findOne({_id:req.params.id});
    if(result)
    {
        resp.send(result)
    }else{
        resp.send({result: "No Record Found"})
    }
})


app.put('/product/:id',async(req,resp)=>{
    let result = await Product.updateOne(
        {_id:req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result)
})




// Search Api
app.get('/search/:key',async(req,resp)=>{
    let result = await Product.find({
        "$or":[
            {Name: { $regex: req.params.key}},
            {Category: { $regex: req.params.key}},
            {Brand: { $regex: req.params.key}}
                ]
    });
    resp.send(result)
})


app.listen(5000);
