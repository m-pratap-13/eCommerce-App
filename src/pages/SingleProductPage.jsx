import { useParams } from "react-router-dom";
import ReviewCard from "../componenets/ReviewCard";
import PreviewImage from "../componenets/PreviewImage";
import ProductDetails from "../componenets/ProductDetails";
import AddToCartBtn from "../componenets/AddToCartBtn";
import OrderBtn from "../componenets/OrderBtn";
import useSingleProduct from "../hooks/useSingleProduct";

function SingleProductPage() {
  const { id } = useParams();
  const product = useSingleProduct(id);

  return (
    <>
      <div className=" flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-cyan-200 p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Image */}
            <PreviewImage product={product} />
            {/* Product Details */}
            <div>
              <ProductDetails product={product} />
              <div className="flex flex-row gap-1">
                <AddToCartBtn product={product} />
                <OrderBtn />
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8 border-t pt-4">
            <h3 className="text-xl  border-b pb-4 mb-5 font-semibold">
              Reviews
            </h3>
            {product.reviews?.map((review) => (
              <ReviewCard key={Math.random()} userReview={review} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProductPage;
