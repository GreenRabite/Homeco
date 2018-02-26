//prod.js - for heroku

module.exports = {
  googleClientID : process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  ZWSID: process.env.ZWSID,
  CLOUD_NAME: process.env.CLOUD_NAME,
  UPLOAD_PRESET: process.env.UPLOAD_PRESET
};
