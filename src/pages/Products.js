import { Link } from "react-router-dom";
import MainNavigation from "../components/ui/MainNavigation";

const PRODUCTS = [
  {
    id: 1,
    title: "Product 1",
    description: "Lorem ipsum",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Lorem ipsum",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Lorem ipsum",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Lorem ipsum",
  },
];

function ProductsPage() {
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
