import Product from "./Product.js";

class Electronics extends Product {
    #brand;
    #warranty;

    constructor(id, name, price, quantity, brand, warranty) {
      super(id, name, price, quantity);
      this.#brand = brand;
      this.#warranty = warranty;
    }

    getProductDetails() {
        return {
          id: this.id,
          name: this.name,
          price: this.price,
          quantity: this.quantity,
          brand: this.#brand,
          warranty: this.#warranty
        };
    }
}

export default Electronics