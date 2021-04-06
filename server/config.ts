module.exports = {
	mongoUri: process.env.MONGO_URI || 'mongodb://admin:pass@mongo:27017/songs',
	PORT: process.env.PORT || 3000
};