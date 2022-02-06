const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

// Load env vars
dotenv.config({ path: './config/config.env' })

// Load models
const Bootcamp = require('./models/Bootcamp')

// Connect to DB
const options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(
    process.env.MONGO_URI,
    options,
    err => {
        err && console.log(err.red)
        !err && console.log(`Connected to the database !`.blue)
    }
)

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))

// Import into DB
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps)
        console.log('Data Imported...'.green)
        process.exit();
    } catch (error) {
        console.error(err)
    }
}

// Delete data
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany()
        console.log('Data Destroyed...'.red)
        process.exit();
    } catch (error) {
        console.error(err)
    }
}

if (process.argv[2] === '-import') {
    importData()
} else if (process.argv[2] === '-delete') {
    deleteData()
}