import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import {
  fetchProductDetails,
  productDetailsSelector,
} from "../../redux/slices/productDetails";
import Product from "./components/Product";
import ProductSkeleton from "../../components/ProductSkeleton";
import ToasterAlert from "../../components/ToasterAlert";
import { addToCart } from "../../redux/slices/cart";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const {
    productDetails,
    loading: productLoading,
    hasErrors: productHasError,
  } = useSelector(productDetailsSelector);
  const [addedToCart, setAddedToCart] = useState(false);

  const notify = () => toast("Added to cart");

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  const buttonAction = (type) => {
    if (type === 1) {
      dispatch(addToCart(productDetails));
      setAddedToCart(true);
      notify();
    } else {
      history.push("/checkout/cart");
    }
  };

  const renderProduct = () => {
    if (productLoading) return <ProductSkeleton />;
    if (productHasError) return <p>Unable to display products.</p>;

    return (
      <Product
        product={productDetails}
        buttonAction={(type) => buttonAction(type)}
        addedToCart={addedToCart}
      />
    );
  };

  return (
    <>
      {renderProduct()}
      <ToasterAlert />
    </>
  );
};

export default ProductDetails;
