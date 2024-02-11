export const generateMetadata = ({ params }) => {
  return {
    title: `Product ${params.productId}`,
  };
};

const ProductDetailsPage = ({ params }) => {
  return <h1>Details about product {params.productId}</h1>;
};

export default ProductDetailsPage;
