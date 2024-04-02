import { Product } from "@/layouts/Products/Product";
import reviewData from "../../../../public/reviews.json";
import { ReviewModel } from "@/models/cms/Review.types";

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

  return result;
};

export default function ProductPage({ params }: any) {
  const reviews = getProductReviews(params.productId);

  return <Product productId={params.productId} reviews={reviews} />;
}
