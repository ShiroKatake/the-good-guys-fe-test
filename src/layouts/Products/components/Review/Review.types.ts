// optional fields won't normally be optional. The brief only
// requires 4 to display, so they'll stay optional to avoid error messages
export interface ReviewProps {
  reviewType?: string;
  orderDate?: string;
  submissionDate?: string;
  customerName: string;
  reviewTitle: string;
  reviewText: string;
  rating: number;
  videoUrl?: string;
  recommendation?: boolean;
  responseTitle?: string;
  responseText?: string;
  customText?: string;
}
