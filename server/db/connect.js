
const mongoose = require('mongoose');

// This will create an new instance of "MongoMemoryServer" and automatically start it
async function connect() {

    mongoose.set('strictQuery', true)
    const db = await mongoose.connect("mongodb+srv://daniyalshiekh166:daniy6@cluster0.fmf5cmm.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected");
    return db
}

module.exports = connect