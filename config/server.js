// config used by server side only

const dbHost = process.env.DB_HOST || 'dev-dts-shard-00-00-gk5cu.mongodb.net:27017,dev-dts-shard-00-01-gk5cu.mongodb.net:27017,dev-dts-shard-00-02-gk5cu.mongodb.net:27017' || '127.0.0.1';
const dbName = process.env.DB_NAME || 'test';
const dbUser = process.env.DB_USER || 'DiligenceTechAdmin';
const dbPass = process.env.DB_PASS || 'Zfe5cyALTPrOCS9B';
const dbCred = dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';
const dbUrl = `mongodb://${dbCred}${dbHost}/${dbName}?ssl=true&replicaSet=dev-dts-shard-0&authSource=admin`;

module.exports = {
  // used by Store (server side)
  apiBaseUrl: `http://localhost:3001/api/v1`,

  // used by Store (server and client side)
  ajaxBaseUrl: `http://localhost:3001/ajax`,

  // Access-Control-Allow-Origin
  storeBaseUrl: `http://localhost:3000`,

  // used by API
  adminLoginUrl: '/admin/login',

  apiListenPort: 3001,
  storeListenPort: 3000,

  // used by API
  mongodbServerUrl: dbUrl,
  mongodbName: dbName,

  smtpServer: {
    host: '',
    port: 0,
    secure: true,
    user: '',
    pass: '',
    fromName: '',
    fromAddress: ''
  },

  // key to sign tokens
  jwtSecretKey: '-',

  // key to sign store cookies
  cookieSecretKey: '-',

  // path to uploads
  categoriesUploadPath: 'public/content/images/categories',
  productsUploadPath: 'public/content/images/products',
  filesUploadPath: 'public/content',
  themeAssetsUploadPath: 'theme/assets/images',

  // url to uploads
  categoriesUploadUrl: '/images/categories',
  productsUploadUrl: '/images/products',
  filesUploadUrl: '',
  themeAssetsUploadUrl: '/assets/images',

  // store UI language
  language: 'en',

  // used by API
  orderStartNumber: 1000,

  developerMode: true
}
