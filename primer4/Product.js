class Product {
    #id;
    #name;
    #price;
    #quantity;
  
    constructor(id, name, price, quantity) {
      this.#id = id;
      this.#name = name;
      this.#price = price;
      this.#quantity = quantity;
    }
  
    get id() {
      return this.#id;
    }
    get name() {
      return this.#name;
    }
    get price() {
      return this.#price;
    }
  
    get quantity() {
      return this.#quantity;
    }
    
    set quantity(newQuantity) {
      this.#quantity = newQuantity;
    }
  
    getProductDetails() {
      throw new Error("Method 'getProductDetails()' must be implemented.");
  }
  }

  export default Product;
