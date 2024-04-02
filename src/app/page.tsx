import { Review } from "@/components/Review/Review";
import reviewData from "../../public/reviews.json";
import { getStaticPaths } from "next/dist/build/templates/pages";

export default function Home() {
  return (
    <main>
      {reviewData.map((review) => {
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
