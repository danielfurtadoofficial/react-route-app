import { useParams } from "react-router-dom";
import MainNavigation from "../components/ui/MainNavigation";

function ProductDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Product Detail</h1>
      <h1>Product {params.productId}</h1>
    </>
  );
}

export default ProductDetailPage;
