const mongoose = require('mongoose');
const { mongoUri } = require('../config');

module.exports = {
	mongoDB: () => {
		mongoose
			.connect(mongoUri,
				{ 
					useNewUrlParser: true,
					useUnifiedTopology: true,
					useCreateIndex: true,
					useFindAndModify: false
				}
			)
			.then(() => console.log('MongoDB connected...'))
			.catch((err) => console.log(err))
	}
};