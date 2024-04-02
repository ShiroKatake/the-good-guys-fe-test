// I assume all data is important, but not all are required
export interface ReviewData {
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
}
