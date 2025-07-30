import HeroSection from "../componenets/HeroSection";
import CategoriesProduct from "../componenets/CategoriesProduct";
import { useParams } from "react-router-dom";
import useCategoriesProducts from "../hooks/useCategoriesProducts";

function CategoriesPage() {
  const { category } = useParams();
  const products = useCategoriesProducts(category);
  return (
    <>
      <HeroSection />
      <CategoriesProduct products={products} />
    </>
  );
}

export default CategoriesPage;
