const app = require('./app');
const mongoose = require('mongoose');
const { mongoUri, PORT } = require('./config');

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
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});