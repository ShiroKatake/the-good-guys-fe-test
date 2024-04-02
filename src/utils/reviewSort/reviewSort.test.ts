import "@testing-library/jest-dom";
import { reviewSort } from "./reviewSort";

describe("Review component", () => {
  it("renders highest rating correctly", () => {
    expect(reviewSort(reviewData, "highestRating").toString()).toEqual(reviewDataHighestRating.toString());
  });
  it("renders lowest rating correctly", () => {
    expect(reviewSort(reviewData, "lowestRating").toString()).toEqual(reviewDataLowestRating.toString());
  });
  it("renders newest correctly", () => {
    expect(reviewSort(reviewData, "newest").toString()).toEqual(reviewDataNewest.toString());
  });
});

const reviewData = [
  {
    "SUBMISSION_DATE": "2/09/2021 15:30",
    "RATING": 5
  },
  {
    "SUBMISSION_DATE": "1/09/2021 18:12",
    "RATING": 3
  },
  {
    "SUBMISSION_DATE": "2/09/2021 19:12",
    "RATING": 4
  },
]

const reviewDataHighestRating = [
  {
    "SUBMISSION_DATE": "2/09/2021 15:30",
    "RATING": 5
  },
  {
    "SUBMISSION_DATE": "2/09/2021 19:12",
    "RATING": 4
  },
  {
    "SUBMISSION_DATE": "1/09/2021 18:12",
    "RATING": 3
  },
]

const reviewDataLowestRating = [
  {
    "SUBMISSION_DATE": "1/09/2021 18:12",
    "RATING": 3
  },
  {
    "SUBMISSION_DATE": "2/09/2021 19:12",
    "RATING": 4
  },
  {
    "SUBMISSION_DATE": "2/09/2021 15:30",
    "RATING": 5
  },
]

const reviewDataNewest = [
  {
    "SUBMISSION_DATE": "2/09/2021 19:12",
    "RATING": 4
  },
  {
    "SUBMISSION_DATE": "2/09/2021 15:30",
    "RATING": 5
  },
  {
    "SUBMISSION_DATE": "1/09/2021 18:12",
    "RATING": 3
  },
]