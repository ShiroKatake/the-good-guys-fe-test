export interface Review {
  reviewHdrId: number;
  productId: number;
  prodNbr: number;
  reviewId: number;
  reviewType: string;
  orderDate: string;
  submissionDate: string;
  customerName: string;
  reviewTitle: string;
  reviewText: string;
  rating: number;
  videoUrl: string;
  recommendation: string;
  responseTitle: string;
  responseText: string;
  customText: string;
  published: string;
  objectID: string;
  _highlightResult: {
    prodNbr: {
      value: string;
      matchLevel: string;
      fullyHighlighted: boolean;
      matchedWords: string[];
    };
  };
}
