// bugSolution.js

export async function getStaticProps() {
  const productIds = [1, 2, 3, 4, 5];
  const products = await Promise.all(
    productIds.map(async (productId) => {
      const res = await fetch(`https://api.example.com/products/${productId}`);
      return res.json();
    })
  );

  return {
    props: {
      products,
    },
  };
}

export default function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
