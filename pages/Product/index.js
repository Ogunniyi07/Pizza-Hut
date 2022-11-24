import dbConnect from "../../util/mongo"
import Product from "../../util/models/Products"

export default async function handler(req, res) {
   const {method} = req;
    
    dbConnect()

   if(method === "GET"){}

   if(method === "POST"){
    try {
        const product = Product.create(req.body);
        res.status(201).json(product);


    }catch(err){
        res.status(500).json(err);
       }
    }
   
}
  