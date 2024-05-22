---
to: src/lib/services/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.repo.ts
---
import { CrudRepository } from "../../servers/repo/crud.repo";
import { <%= h.inflection.camelize(name) %> } from "./<%= h.inflection.camelize(name, true) %>.model";
import { <%= h.inflection.camelize(name) %>Fields } from "./<%= h.inflection.camelize(name, true) %>.field";

export class <%= h.inflection.camelize(name) %>Repository extends CrudRepository<<%= h.inflection.camelize(name) %>> {

  apiName = "<%= h.inflection.camelize(name) %>";

  shortFragment = this.parseFragment(`
    ${<%= h.inflection.camelize(name) %>Fields}
  `);

  fullFragment = this.parseFragment(`
    ${<%= h.inflection.camelize(name) %>Fields}
  `);

}

export const <%= h.inflection.camelize(name) %>Service = new <%= h.inflection.camelize(name) %>Repository();