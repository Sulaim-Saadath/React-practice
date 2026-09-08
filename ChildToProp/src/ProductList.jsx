const ProductList = ({ search }) => {
  const products = ["Laptop", "Phone", "Mouse", "Keyboard"];

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {filteredProducts.map((product) => (
        <h2 key={product}>{product}</h2>
      ))}
    </>
  );
};

export default ProductList;