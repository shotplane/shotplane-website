export const ClaimWalletFields = `
id: String
createdAt: DateTime
updatedAt: DateTime
claimBalance: Float
unlockBalance: Float
refBalance: Float
customerId: String
status: String
`
export const ClaimWalletQuery = `
id
createdAt
updatedAt
claimBalance
unlockBalance
refBalance
customerId
status
`