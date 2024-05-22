export const TransactionFields = `
id: String
createdAt: DateTime
updatedAt: DateTime

fromTxHash: String
toTxHash: String
approvedTxHash: String

toBlockNumber: Int
fromBlockNumber: Int

price: Float
value: Float
weiValue: Float
currency: String

type: String
status: String
event: String

customerId: String
fromAddress: String

receiverId: String
toAddress: String

fromContractId: String
fromContractAddress: String
fromContractCode: String


toContractId: String
toContractAddress: String
toContractCode: String

fromChainCode: String
fromChainNumber: Int
fromNetworkId: String

toChainCode: String
toChainNumber: Int
toNetworkId: String
`;
export const TransactionQuery = `
id
createdAt
updatedAt

fromTxHash
toTxHash
approvedTxHash

toBlockNumber
fromBlockNumber

price
value
weiValue
currency

type
status
event

customerId
fromAddress

receiverId
toAddress

fromContractId
fromContractAddress
fromContractCode


toContractId
toContractAddress
toContractCode

fromChainCode
fromChainNumber
fromNetworkId

toChainCode
toChainNumber
toNetworkId
`;
