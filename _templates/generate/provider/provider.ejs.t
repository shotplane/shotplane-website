---
to: src/providers/<%= h.changeCase.paramCase(name) %>-provider.tsx
---
import { createContext, useContext } from "react";
export const <%= h.inflection.camelize(name) %>Context = createContext<{
  [x: string]: any;
}>({});

export function <%= h.inflection.camelize(name) %>Provider(props) {
  return <<%= h.inflection.camelize(name) %>Context.Provider value={{}}>{props.children}</<%= h.inflection.camelize(name) %>Context.Provider>;
}

export const use<%= h.inflection.camelize(name) %>Context = () => useContext(<%= h.inflection.camelize(name) %>Context);