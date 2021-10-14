import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { fetchProducts, productsSelector } from "../../redux/slices/products";
import CardSkeleton from "../../components/CardSkeleton";

const Products = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const {
    products,
    loading: productsLoading,
    hasErrors: productsHasError,
  } = useSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [dispatch, category]);

  const renderProducts = () => {
    if (productsLoading) return <CardSkeleton />;
    if (productsHasError) return <p>Unable to display products.</p>;

    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {renderProducts()}
    </div>
  );
};

export default Products;
