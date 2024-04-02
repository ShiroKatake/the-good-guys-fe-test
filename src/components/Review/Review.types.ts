// I assume all data is important, but not all are required
export interface ReviewData {
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
  recommendation: boolean;
  responseTitle: string;
  responseText: string;
  customText: string;
  published: boolean;
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
