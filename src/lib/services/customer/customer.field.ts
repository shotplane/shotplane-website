export const CustomerFields = `
id: String
createdAt: DateTime
updatedAt: DateTime

username: String
address: String

referral: String
shortUrl: String
activedAt: DateTime
role: String
nonce: String
addressIp: String

bannerUrl: String
avatarUrl: String
approved: Boolean

dangerous: Boolean

walletType: String
status: String

level: Int
currentExp: Int

piWallet: String
telegram: String


email: String

pendingAddress: String
pendingAddressVerified: Boolean

invitationCode: String
`;

export const CustomerQuery = `
id
createdAt
updatedAt

username
address
email

referral
shortUrl
activedAt
role
nonce
addressIp

bannerUrl
avatarUrl
approved

dangerous

walletType
status

level
currentExp

piWallet
telegram

pendingAddress
pendingAddressVerified

invitationCode
`;
