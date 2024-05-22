import { CrudRepository } from "../../servers/repo/crud.repo";
import { PageSEO } from "./pageSeo.model";
import { PageSEOFields } from "./pageSeo.field";
import { QueryOptions } from "@apollo/client";

export class PageSEORepository extends CrudRepository<PageSEO> {
  apiName = "PageSEO";

  shortFragment = this.parseFragment(`
    ${PageSEOFields}
  `);

  fullFragment = this.parseFragment(`
    ${PageSEOFields}
  `);

  async getOnePageSEOByPage({ seoPage }: { seoPage: string }) {
    const api = "getOnePageSEOByPage";
    const option: QueryOptions = {
      query: this.gql`query {  ${api}(seoPage: "${seoPage}") { ${this.fullFragment} }}`,
      fetchPolicy: "no-cache",
    };
    option.context = { headers: {} };
    const { data } = await this.apollo.query(option);
    return data[api];
  }
}

export const PageSEOService = new PageSEORepository();
