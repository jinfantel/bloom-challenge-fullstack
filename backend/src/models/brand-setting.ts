/** 
* Debes completar este modelo como consideres adecuado
*/

export interface BrandSetting {
  brandId: string;
  name: string;
  supportsCoupons: boolean;
  shippingOptions: ('home_pickup' | 'blue_express')[];
  paymentOptions: ('coupon' | 'bank_transfer')[];
  requiresSanitization?: boolean;
  sanitizationCost?: string;
  requiresWorkshopReview?: boolean;
  siteUrl?: string;
}