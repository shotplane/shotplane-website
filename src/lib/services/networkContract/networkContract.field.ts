export const NetworkContractFields = `
id: String
createdAt: DateTime
updatedAt: DateTime

name: String
code: String
contractAddress: String
contractABI: String
providerUrl: String
chainCode: String
networkId: String
status: String
`;
export const NetworkContractQuery = `
id
createdAt
updatedAt
name
code
contractAddress
contractABI
providerUrl
chainCode
networkId
status
`;
