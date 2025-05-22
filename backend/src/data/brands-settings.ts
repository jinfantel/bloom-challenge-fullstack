/** 
* Debes completar este archivo como consideres adecuado
*/

import { BrandSetting } from '../models/brand-setting';

export const brandSettings: BrandSetting[] = [
  {
    brandId: 'karyncoo',
    name: 'Karyn Coo',
    supportsCoupons: true,
    shippingOptions: ['home_pickup', 'blue_express'],
    paymentOptions: ['coupon', 'bank_transfer'],
    siteUrl: 'https://karyncoo.bloomreuse.com/',
  },
  {
    brandId: 'andesgear',
    name: 'Andesgear',
    supportsCoupons: false,
    shippingOptions: ['home_pickup', 'blue_express'],
    paymentOptions: ['bank_transfer'],
    siteUrl: 'https://circular.andesgear.cl/',
  },
  {
    brandId: 'milu',
    name: 'Milú Rugs',
    supportsCoupons: true,
    shippingOptions: ['home_pickup'],
    paymentOptions: ['coupon', 'bank_transfer'],
    requiresSanitization: true,
    sanitizationCost: "10.000",
    siteUrl: 'https://milu.bloomreuse.com',
  },
  {
    brandId: 'kokoro',
    name: 'Kokoro',
    supportsCoupons: true,
    shippingOptions: ['home_pickup', 'blue_express'],
    paymentOptions: ['coupon', 'bank_transfer'],
    requiresWorkshopReview: true,
    siteUrl: 'https://vintage.kokoro.cl',
  }
];