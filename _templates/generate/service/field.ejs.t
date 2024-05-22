---
to: src/lib/services/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.field.ts
---
export const <%= h.inflection.camelize(name) %>Fields = `
id: String
createdAt: DateTime
updatedAt: DateTime
name: String
`
export const <%= h.inflection.camelize(name) %>Query = `
id
createdAt
updatedAt
name
`