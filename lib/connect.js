const mongoose = require('mongoose');
const dbUri = process.env.MONGO_URI || 'mongodb://localhost:27017/image';

mongoose.connect(dbUri);

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('No more data to serve you fools');
        process.exit(0);
    });
});