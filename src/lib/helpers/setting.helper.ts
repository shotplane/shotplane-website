export enum SettingKey {
  // Cấu hình chung
  TITLE = "TITLE",
  WEBSITE_DOMAIN = "WEBSITE_DOMAIN",
  API_DOMAIN = "API_DOMAIN",
  MEDIA_DOMAIN = "MEDIA_DOMAIN",
  LOGO_URL = "LOGO_URL",
  MAINTENANCE = "MAINTENANCE",

  // cấu hình website
  USE_MENU_CATEGORY = "USE_MENU_CATEGORY",
  ADMIN_MENU = "ADMIN_MENU",
  EDITOR_MENU = "EDITOR_MENU",
  MENU_CATEGORIES = "MENU_CATEGORIES",

  // cau hinh blockchain
  NONCE_CODE = "NONCE_CODE",

  //Claim setting
  CLAIM_AVAILABLE_MIN_AMOUNT = "CLAIM_AVAILABLE_MIN_AMOUNT",
  CLAIM_AVAILABLE_MAX_AMOUNT = "CLAIM_AVAILABLE_MAX_AMOUNT",
  CLAIM_AVAILABLE_AMOUNT = "CLAIM_AVAILABLE_AMOUNT",
  CLAIM_INIT_REF_CODE = "CLAIM_INIT_REF_CODE",
  CLAIM_NEXT_TIME = "CLAIM_NEXT_TIME",
}

export const initSettings = [
  SettingKey.NONCE_CODE,
  SettingKey.CLAIM_NEXT_TIME,
  SettingKey.CLAIM_AVAILABLE_AMOUNT
]