const mongoose = require('mongoose')
// const connectionString = 'mongodb+srv://saravana03:1234@cluster0.tsvgx2o.mongodb.net/Apartments?retryWrites=true&w=majority'
// const connectionString = 'mongodb+srv://SahithiRao:123@cluster0.3qfemgv.mongodb.net/PM_POSHAN?retryWrites=true&w=majority'
const connectionString = 'mongodb+srv://sahithirrao:123@cluster0.tf9fpe5.mongodb.net/?retryWrites=true&w=majority'
// const connectionString = 'mongodb://127.0.0.1:27017/testdata'
const connectDB = (url) => {
    return mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
}

module.exports = connectDB
