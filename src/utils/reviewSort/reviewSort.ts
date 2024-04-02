import { ReviewModel } from "@/models/cms/Review.types";

export type SortMethod = "newest" | "highestRating" | "lowestRating";

export const reviewSort = (reviews: Pick<ReviewModel, "SUBMISSION_DATE" | "RATING">[], method: SortMethod) => {
  const sortedCopy = [...reviews];

  sortedCopy.sort((a, b) => {
    switch (method) {
      case "newest":
        //add a field that's converted to milliseconds for easier comparison
        sortedCopy.forEach((review) => {
          (review as any).SUBMISSION_DATE_CONVERTED = new Date(review.SUBMISSION_DATE).getTime().toString();
        });

        if ((a as any).SUBMISSION_DATE_CONVERTED > (b as any).SUBMISSION_DATE_CONVERTED) {
          return 1;
        }
        if ((a as any).SUBMISSION_DATE_CONVERTED < (b as any).SUBMISSION_DATE_CONVERTED) {
          return -1;
        }
        return 0;

      case "highestRating":
        if (a.RATING < b.RATING) {
          return 1;
        }
        if (a.RATING > b.RATING) {
          return -1;
        }
        return 0;

      case "lowestRating":
        if (a.RATING > b.RATING) {
          return 1;
        }
        if (a.RATING < b.RATING) {
          return -1;
        }
        return 0;

      default:
        return 0;
    }
  });

  return sortedCopy;
};
