import WishlistCard from "./WishlistCard";
import useCartWishlist from "../hooks/useCartWishlist";
import { useSelector } from "react-redux";

function WishlistItems() {
  const wishlistItemsId =
    useSelector((state) => state.wishlistId.wishlistItemsId) || [];
  const products = useCartWishlist(wishlistItemsId)

  return (
    <div className="p-10 ">
      {products?.map((product) => (
        <WishlistCard
          key={product.id}
          id={product.id}
          title={product.title}
          priceAfterDiscount={(
            product.price -
            (product.price * Math.round(product.discountPercentage)) / 100
          ).toFixed(2)}
          price={product.price}
          discountPercentage={Math.round(product.discountPercentage)}
          stock={product.stock}
          images={product.images?.[0]}
          rating={product.rating}
          description={product.description}
          warranty={product.warrantyInformation}
        />
      ))}
    </div>
  );
}

export default WishlistItems;
