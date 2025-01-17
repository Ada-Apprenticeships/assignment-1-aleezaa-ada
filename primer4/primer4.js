import Inventory from "./Inventory.js";
import ProductFactory from "./ProductFactory.js";

const inventory = new Inventory();

try {
  const tshirt = ProductFactory.createProduct("Clothing", "A123", "T-shirt", 19.99, 100, "L", "Cotton");
  const laptop = ProductFactory.createProduct("Electronics", "B456", "Laptop", 799.99, 20, "Dell", "1 year");
  inventory.addProduct(tshirt);
  inventory.addProduct(laptop);
  const retriedProduct = inventory.getProduct("A123")
  console.log(retriedProduct); // T-shirt details
  console.log(inventory.getProduct("B456")); // Laptop details

  inventory.updateQuantity("A123", 150);
  console.log(inventory.getProduct("A123")); // Updated T-shirt quantity

  inventory.removeProduct("B456");
  console.log(inventory.getNumOfItems()); // Remaining items: 1
} catch (error) {
  console.error(error.message);
}
