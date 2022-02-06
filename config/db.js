const mongoose = require('mongoose')

const options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connectDB = async () => {
    await mongoose.connect(
        process.env.MONGO_URI,
        options,
        err => {
            err && console.log(err.red)
            !err && console.log(`Connected to the database !`.blue)
        }
    )
}

module.exports = connectDB;