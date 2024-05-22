import { DefaultSeo } from "next-seo";
import { PageSEO, SEOPages } from "@/lib/services/pageSeo/pageSeo.model";
import { bannerUrl, pagesData, websiteUrl } from "@/shared/pages.data";

const PageSeoHeader = ({ pageSEO }: { pageSEO?: PageSEO }) => {
  const page = pagesData.find((page) => page.seoPage === SEOPages.HOME);
  return (
    <DefaultSeo
      title={pageSEO?.title || page.title}
      description={pageSEO?.description || page.description}
      canonical={pageSEO.url}
      additionalMetaTags={[{ name: "keywords", content: pageSEO?.keywords }]}
      twitter={{
        cardType: "summary",
        site: pageSEO?.twitter || page.twitter,
      }}
      openGraph={{
        type: "website",
        locale: "en_US",
        url: pageSEO.url,
        site_name: pageSEO.title,
        images: [{ url: bannerUrl }],
        description: pageSEO?.description || page.description,
        title: pageSEO?.title || page.title,
      }}
    />
  );
};

export default PageSeoHeader;
