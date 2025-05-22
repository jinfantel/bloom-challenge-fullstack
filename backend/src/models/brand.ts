import { BrandSetting } from "./brand-setting";

export type Brand = {
  id: string;
  name: string;
  url: string;
  settings?: BrandSetting;
};

export type Brands = Brand[];
