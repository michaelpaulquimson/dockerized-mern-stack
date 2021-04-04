module.exports = {
	mongoUri: process.env.MONGO_URI || 'mongodb://admin:pass@mongo:27017/musics',
	PORT: process.env.PORT || 3000
};