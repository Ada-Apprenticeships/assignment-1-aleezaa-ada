// Import the necessary modules
import Inventory from './Inventory.js';
import Product from './Product.js';
import ProductFactory from './ProductFactory.js';

describe('Inventory', () => {
  let inventory;
  let product1, product2;

  beforeEach(() => {
    inventory = new Inventory();
    product1 = ProductFactory.createProduct("Clothing", "A123", "T-shirt", 19.99, 100, "L", "Cotton");
    product2 = ProductFactory.createProduct("Electronics", "B456", "Laptop", 799.99, 20, "Dell", "1 year");
  });

  describe('Abstract Product Class', () => {
    test('cannot instantiate the Product class directly', () => {
      const productInstance = new Product("P001", "AbstractProduct", 100, 10);
      expect(() => productInstance.getProductDetails()).toThrowError(
        "Method 'getProductDetails()' must be implemented."
      );
    });
  });
  

  describe('Adding Products', () => {
    test('can add products to the inventory', () => {
      inventory.addProduct(product1);
      inventory.addProduct(product2);
      expect(inventory.getNumOfItems()).toBe(2);
    });

    test('throws error when adding a product with a duplicate ID', () => {
      inventory.addProduct(product1);
      expect(() => inventory.addProduct(product1)).toThrowError(`Product with ID ${product1.id} already exists.`);
    });
  });

  describe('Updating Product Quantities', () => {
    test('can update the quantity of a product', () => {
      inventory.addProduct(product1);
      inventory.updateQuantity("A123", 75);
      expect(inventory.getProduct("A123").quantity).toBe(75);
    });

    test('throws error when updating the quantity of a non-existent product', () => {
      expect(() => inventory.updateQuantity("C789", 75)).toThrowError(`Product with ID C789 not found.`);
    });
  });

  describe('Removing Products', () => {
    test('can remove a product from the inventory', () => {
      inventory.addProduct(product1);
      inventory.addProduct(product2);
      inventory.removeProduct("A123");
      expect(() => inventory.getProduct("A123")).toThrowError(`Product with ID A123 not found.`);
      expect(inventory.getProduct("B456")).toEqual({
        id: "B456",
        name: "Laptop",
        price: 799.99,
        quantity: 20,
        brand: "Dell",
        warranty: "1 year"
      });
    });

    test('throws error when removing a non-existent product', () => {
      expect(() => inventory.removeProduct("C789")).toThrowError(`Product with ID C789 not found.`);
    });
  });

  describe('Retrieving Product Details', () => {
    test('can retrieve the details of products', () => {
      inventory.addProduct(product1);
      inventory.addProduct(product2);

      expect(inventory.getProduct("A123")).toEqual({
        id: "A123",
        name: "T-shirt",
        price: 19.99,
        quantity: 100,
        size: "L",
        material: "Cotton"
      });

      expect(inventory.getProduct("B456")).toEqual({
        id: "B456",
        name: "Laptop",
        price: 799.99,
        quantity: 20,
        brand: "Dell",
        warranty: "1 year"
      });
    });
  });
});

