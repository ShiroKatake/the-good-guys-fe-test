import { ReviewModel } from "@/models/cms/Review.types";

// sort by publish date and then by rating
export const reviewSort = (reviews: ReviewModel[]) => {
  const sortedCopy = [...reviews];
  sortedCopy.sort((a, b) => {
    if (a.PUBLISHED < b.PUBLISHED) {
      return 1;
    }
    if (a.PUBLISHED > b.PUBLISHED) {
      return -1;
    }
    if (a.RATING < b.RATING) {
      return 1;
    }
    if (a.RATING > b.RATING) {
      return -1;
    }
    return 0;
  });

  return sortedCopy;
};
