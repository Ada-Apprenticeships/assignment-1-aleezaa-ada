import Clothing from "./Clothing.js";
import Electronics from "./Electronics.js";

class ProductFactory {
  static createProduct(type, id, name, price, quantity, ...additionalAttributes) {
    switch (type) {
      case "Clothing":
        return new Clothing(id, name, price, quantity, ...additionalAttributes);
      case "Electronics":
        return new Electronics(id, name, price, quantity, ...additionalAttributes);
      default:
        throw new Error(`Unknown product type: ${type}`);
    }
  }
}

export default ProductFactory;