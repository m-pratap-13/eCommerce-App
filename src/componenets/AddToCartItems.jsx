import { useSelector } from "react-redux";
import ShoppingCard from "../componenets/ShopingCard";
import useCartWishlist from "../hooks/useCartWishlist";

function AddToCartItems({ quantity, setQuantity }) {
  const cartItemsId = useSelector((state) => state.cartId.cartItemsId) || [];
  const products = useCartWishlist(cartItemsId);

  return (
    <div>
      {products?.map((product) => (
        <ShoppingCard
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
          quantity={quantity}
          setQuantity={setQuantity}
        />
      ))}
    </div>
  );
}

export default AddToCartItems;
