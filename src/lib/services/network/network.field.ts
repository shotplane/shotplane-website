export const NetworkFields = `
id: String
createdAt: DateTime
updatedAt: DateTime

chainNumber: Int
status: String
code: String
imgUrl: String
network: Mixed
minFaucetFee: Float
maxFaucetFee: Float
minDepositFee: Float
maxDepositFee: Float
minWithdrawFee: Float
maxWithdrawFee: Float
minGasFee: Float
maxGasFee: Float
`;
export const NetworkQuery = `
id
createdAt
updatedAt

chainNumber
status
code
network
imgUrl

minFaucetFee
maxFaucetFee
minDepositFee
maxDepositFee
minWithdrawFee
maxWithdrawFee
minGasFee
maxGasFee
`;
