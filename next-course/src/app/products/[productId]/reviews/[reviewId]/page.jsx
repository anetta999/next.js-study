import { notFound } from "next/navigation";

const ReviewPage = ({ params }) => {
  if (parseInt(params.reviewId > 1000)) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
};

export default ReviewPage;
