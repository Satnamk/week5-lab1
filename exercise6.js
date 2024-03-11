// Using map to Extract Specific Properties
const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 30 }
];
const productNames = products.map(function(product) {
  return product.name;
});
console.log(productNames);