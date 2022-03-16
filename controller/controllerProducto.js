const Products = require("../claseProducto/producto")

const productos = new Products()

module.exports = {
    
    getProducts: (req, res) => {
        try {
            res.status(200).json(productos.productsAll) 
        }catch(e){
            res.status(500).json(e.message) 
        }
    },

    searchProduct:(req, res) => {
        try {
            const producto = productos.getProductById(req.params.id)
            if(producto){
                return res.status(200).json(producto)
            }else {
                return res.status(200).json({error: "Producto No Encontrado"})
            } 
            
        }catch(e){
            res.status(500).json(e.message)
        }
    },

    addProduct: (req, res) => {
        try {
            if(req.body.title && req.body.price && req.body.thumbnail){
                productos.saveProduct(req.body)
            }else{
                res.status(400).json({error: "Falta campos que completar"})  
            }
            res.status(201).json(productos.productsAll) 
        }catch(e){
            res.status(500).json(e.message)
        }
    },

    updateProduct: (req, res) => {
        try {
            const id = Number(req.params.id)
            productos.update(id, req.body)
        }catch(e){
            res.status(`No se pudo editar ${e.message}`)
        }
        res.status(201).json(productos.productsAll) 
    },

    deleteProduct: (req, res) => {
        try {
            const id = Number(req.params.id);
            productos.deleteById(id);
            res.json(productos.productsAll)
        }catch(e){
            res.status(500).json({error: `No se pudo borrar el producto ${e.message}`})
        }
    }
}