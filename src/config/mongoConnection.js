const mongoose = require('mongoose');


class mongoConnection{
    
    constructor() {}

    connect = async () => {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {});
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }
    
    
    disconnect = async () => {
        try {
            await mongoose.disconnect();
            console.log('Disconnected from MongoDB');
        } catch (error) {
            console.error('Error disconnecting from MongoDB:', error);
            throw error;
        }
    }
                          
}

module.exports = mongoConnection;