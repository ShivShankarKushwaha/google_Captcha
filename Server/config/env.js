require('dotenv').config();
module.exports={
    PORT: process.env.PORT || 5500,
    MONGO_LINK: process.env.MONGO_LINK,
    SESSION_SECRET: process.env.SESSION_SECRET,
    CAPTCHA_SECRET : process.env.CAPTCHA_SECRET
}