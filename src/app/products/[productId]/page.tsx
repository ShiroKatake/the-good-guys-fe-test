import Link from "next/link";
import reviewData from "../../../../public/reviews.json";
import { ReviewModel } from "@/models/cms/Review.types";
import { Review } from "@/components/Review/Review";
import { reviewSort } from "@/utils/reviewSort";

// Get product URLs
export const generateStaticParams = async () => {
  // If I was given a live url to fetch data from, I'd do something like this
  // const productUrl = `${CMS_API_URL}/${SITEMAP_PAGES.products}.json`;

  const result: ReviewModel[] = reviewData; // This would've been: const result: ReviewModel[] = await fetch(url);

  const pagePaths = result.map((item) => {
    return { productId: item.PRODUCT_ID.toString() };
  });

  // This won't not be necessary irl since we'll have the products data (already unique), not through reviews data like this
  const uniquePaths = pagePaths.filter((item, index) => pagePaths.indexOf(item) === index);

  return uniquePaths;
};

const getProductReviews = (productId: string) => {
  // const reviewUrl = `${CMS_API_URL}/${SITEMAP_PAGES.reviews}.json`;
  // const reviewData = await fetch(url);
  const result = reviewData.filter((review) => {
    return review.PRODUCT_ID === parseInt(productId);
  });

  const sortedReviews = reviewSort(result);

  return sortedReviews;
};

export default function Product({ params }: any) {
  const reviews = getProductReviews(params.productId);

  return (
    <main>
      <Link href="/">Back to home</Link>
      <h1>Product: {params.productId}</h1>
      {reviews.map((review: any) => {
        return (
          <Review
            key={review.REVIEW_HDR_ID}
            rating={review.RATING}
            reviewTitle={review.REVIEW_TITLE}
            reviewText={review.REVIEW_TEXT}
            customerName={review.CUSTOMER_NAME}
          ></Review>
        );
      })}
    </main>
  );
}
