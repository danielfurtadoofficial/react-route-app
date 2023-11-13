import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const goToProductsHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={goToProductsHandler}>Go to products</button>
    </>
  );
}

export default HomePage;
