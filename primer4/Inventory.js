import Product from "./Product.js";
class Inventory {
  #products;

  constructor() {
    this.#products = new Map();
  }

  addProduct(product) {
    if (this.#products.has(product.id)) {
      throw new Error(`Product with ID ${product.id} already exists.`);
    }
    this.#products.set(product.id, product);
  }

  updateQuantity(id, quantity) {
    const product = this.#products.get(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    product.quantity = quantity;
  }

  getProduct(id) {
    const product = this.#products.get(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    return product.getProductDetails();
  }

  removeProduct(id) {
    if (!this.#products.has(id)) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    this.#products.delete(id);
  }

  getNumOfItems() {
    return this.#products.size;
  }
}

export default Inventory;