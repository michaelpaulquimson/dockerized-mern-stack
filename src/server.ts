const app = require('./app');
const { PORT } = require('./config');
const { mongoDB } = require('./db/mongo');

mongoDB();

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});