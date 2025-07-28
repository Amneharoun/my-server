const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT;

//connexion de serveur avec mongodb

mongoose.connect(process.env.MONGODB_URI)
.then(()=> {
    console.log("successfully to conneted");   
    
})
.catch((error)=>{
    console.error(error);
    
});
// creat schema databas
const schema = mongoose.Schema({
    produitName:{
        type: 'string',
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    stockStatus:{
        type: String,
        enum:["en stock","petite stock","pas stock"],
        default:"en stock",
        require:true
    }
});

// cerate model
const produitModel = mongoose.model("produits", schema);

app.use(express.json());
// route
app.get("/produits", async (req,res)=>{
    const produits = await produitModel.find();
    res.send({produits,});
});

// rout id
app.get("/produits/:id", async (req,res)=> {
    const id = req.params.id;
    const produit = await produitModel.findById(id);
    res.send({produit});
    if (!produit) {
        res.status(404).send({
            message:"produit not found"
        });
        return;
    }
     res.send({ produit }); 
});

// post to add produit
app.post("/produits", async (req,res)=> {
    const produit = req.body;
    // console.log(produit);

    try{
        await produitModel.create(produit);
    } catch(error){
        res.send({
            message: error,
        });
        return;
    }
    res.send({
        message: "produit added successfully",
        produit,
    });    
});

// route patch
app.patch("/produits/:id", async (req,res)=> {
const produitId = req.params.id;
const recupere = await produitModel.findById(produitId);
if (!recupere) {
    res.status(404).send({
        message: "produit dos'nt found"
    })
    return;
    }
    const produitName = req.body.produitName;
    const price = req.body.price;
    const updateproduit = await produitModel.findByIdAndUpdate(produitId, {produitName, price }, {"new":true});
    res.send({
        message: "produit+ to updated",
        updateproduit
        
    });
});
// route patch the id
app.patch("/produits/:id/:status", async (req,res)=> {
    const produitIdstatus = req.params.id;
    const status = await produitModel.findByIdAndUpdate(produitIdstatus);
    if (!status) {
        res.status(404).send({
            message: "produit dos'nt update"
        })
      return;  
    }
    res.send({
        message: "produit to updated"
    });
});

// delete produit by id
app.delete("/produits/:id", async (req,res)=>{
    const produitdelete = await produitModel.findByIdAndDelete(req.params.id);
    if (!produitdelete) {
      req.status(404).send({
        message: "bad action"
      });
      return
    }
    res.send({
        message: "produit to deleted",
        produitdelete
    })
})

app.listen(PORT,()=> {
    console.log(`mon serveur port ${PORT}`);
    
});
