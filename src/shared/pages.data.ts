import { PageData, PageTypes } from "../lib/models/page-data.model";
import { PageSEO, SEOPages } from "../lib/services/pageSeo/pageSeo.model";
import { tags } from "./tag.data";

export const subFixTitle = "Shot Plane";
export const subFixDescription =
  "Shot Plane is an engaging 2D game available on the TON Wallet Telegram platform.";
export const websiteUrl = "https://shotplane.org"
export const bannerUrl = "https://shotplane.org/images/banner.png"

export const pagesData: PageSEO[] = [
  {
    title: subFixTitle,
    description: subFixDescription,
    keywords: tags.map((tag) => tag.tag).join(","),
    image: bannerUrl,
    url: websiteUrl,
    canonical: websiteUrl,
    twitter: "@shotplane",
    seoPage: SEOPages.HOME,
  },
];
