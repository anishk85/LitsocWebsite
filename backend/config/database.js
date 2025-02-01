const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = mongoose.connect(process.env.DATABASE_URL)
.then(() => {
    console.log('database connected successfully');
})
.catch(() => {
    console.log('error while connecting to database');
    process.exit(1);
});
module.exports = dbConnect;