// optional fields won't normally be optional. The brief only
// requires 4 to display, so they'll stay optional to avoid error messages
export interface ReviewProps {
  customerName: string;
  rating: number;
  reviewTitle?: string;
  reviewText?: string;
  reviewType?: string;
  orderDate?: string;
  submissionDate?: string;
  videoUrl?: string;
  recommendation?: boolean;
  responseTitle?: string;
  responseText?: string;
  customText?: string;
}
