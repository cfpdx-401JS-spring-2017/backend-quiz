process.env.MONGO_URI = 'mongodb://localhost:27017/image-test';
require('../lib/connect');
const connection = require('mongoose').connection;

module.exports = {
    drop() {
        return connection.dropDatabase();
    }
};