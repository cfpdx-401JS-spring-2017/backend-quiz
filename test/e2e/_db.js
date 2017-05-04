process.env.MONGO_DBURI = 'mongodb://localhost:27017/imagestest';
require('../../lib/connect');
const connection = require('mongoose').connection;

module.exports = {
    drop() {
        return connection.dropDatabase();
    }
};
