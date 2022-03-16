class Productos{
    constructor(){
        this.products = [
        ];
        this.id = 0;
    }  

    get productsAll() {
        try{
            return this.products;
        }catch(e){
            throw new Error(`Se produjo un error: ${e.message}`);
        }
    }

    saveProduct(product){
        try{
                this.id ++
                const newProduct = {
                    id: this.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail
                };
                this.products.push(newProduct)
                return newProduct;
            
        }catch(e){
            throw new Error(`No se pudo guardar el producto: ${e.message}`)
        }
    }

    getProductById(idProduct){
        try {
            return this.products.find(product => product.id == idProduct);
        }catch(e) {
            throw new Error(`No se encontro el Producto`);
        }
    }

    update(id, body){
        const product = {
            id: id,
            title: body.title,
            price: body.price,
            thumbnail: body.thumbnail
        } ;
        const updateIndex = this.products.findIndex((producto) => producto.id == id);
        this.products[updateIndex] = product;
        return product;
    }

    deleteById(id) {
        try {
            const deleteIndex = this.products.findIndex((product) => product.id === id);
            console.log(deleteIndex)
            if (deleteIndex === -1 ){
                console.log("Id no encontrado");
            } else{
                const deleteData = this.products.splice(deleteIndex,1);
                console.log("id eliminado");
                console.log(deleteData);
            }
            } catch (error) {
            console.log("Error " + error);
        }
    }
}

module.exports = Productos;


