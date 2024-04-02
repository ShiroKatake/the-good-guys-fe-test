import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Review } from "./Review";
import React from "react";

describe("Review component", () => {
  it("renders correct info in correct order", () => {
    const reviewData = {
      customerName: "customerName",
      reviewTitle: "reviewTitle",
      reviewText: "reviewText",
      rating: 2,
    };

    render(<Review {...reviewData} />);
    const pElements = document.querySelectorAll("p");

    expect(pElements[0]).toHaveTextContent("customerName");
    expect(pElements[1]).toHaveTextContent("Ratings: 2");
    expect(pElements[2]).toHaveTextContent("reviewTitle");
    expect(pElements[3]).toHaveTextContent("reviewText");
  });
});
