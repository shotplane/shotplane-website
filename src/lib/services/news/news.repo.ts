import { CrudRepository } from "../../servers/repo/crud.repo";
import { News } from "./news.model";
import { NewsFields } from "./news.field";

export class NewsRepository extends CrudRepository<News> {

  apiName = "News";

  shortFragment = this.parseFragment(`
    ${NewsFields}
  `);

  fullFragment = this.parseFragment(`
    ${NewsFields}
  `);

}

export const NewsService = new NewsRepository();