export type Brand = {
  id: string
  name: string
  url: string
}

export type BrandSetting = {
  brandId: string
  name: string
  supportsCoupons: boolean
  shippingOptions: string[]
  paymentOptions: string[]
  requiresSanitization?: boolean
  sanitizationCost?: number
  requiresWorkshopReview?: boolean
  siteUrl: string
}
