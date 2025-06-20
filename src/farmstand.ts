interface Product {
  name: string;
  price: number;
  quantity: number;
}

const printProduct = (product: Product): void => {
  console.log(`${product.name} - ${product.price}:${product.quantity}`);
};

const product1 = {
  name: "Pen",
  price: 100,
  quantity: 2,
};

printProduct(product1);
