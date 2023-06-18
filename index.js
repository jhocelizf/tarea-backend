class ProductManager {
    products;
    constructor() {
        this.products = [];
    }
    static correlativoId = 0;
    addProduct(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("Todos los campos son obligatorios.");
        }
        let existingProduct = this.products.some((dato) => dato.code == code);

        if (existingProduct) {
            throw new Error("Por favor verifique, el codigo ya existe!!");
        } else {
            ProductManager.correlativoId++;
            const newProduct = {
                id: ProductManager.correlativoId,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            };
            this.products.push(newProduct);
        }

    }
    getProducts() {
        return this.products;
    }
    getProductById(id) {
        let product = this.products.find((dato) => dato.id === id);

        if (!product) {
            console.log("Not found");
        }
        return product;
    }
}

const manager = new ProductManager();

// productos agregados
manager.addProduct("Producto 1", "Descripción 1", 100, "imagen1.jpg", "code1", 10);
manager.addProduct("Producto 2", "Descripción 2", 200, "imagen2.jpg", "code2", 5);
// duplicado para generar un error
// manager.addProduct("Producto 2", "Descripción 2", 200, "imagen2.jpg", "code2", 5);


// mostrar todos los productos
const allProducts = manager.getProducts();
console.log(allProducts);


// obtener un producto por su id
/* const productId = manager.getProductById(1);
console.log(productId); */


// intentar obtener un id de un producto que no existe
// const nonExistingProduct = manager.getProductById(5);

