import { Request, Response, NextFunction } from 'express';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const songRoutes = require('./routes/api/songs');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/songs', songRoutes);

app.use((req: Request, res: Response) => {
	res.status(404).json({ status: 404, error: 'Not found' });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req: Request, res: Response, next: NextFunction) => {
	const error = new Error('Not found');
	res.status(404).json({
		status: 404,
		message: error.message
	});
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(function (err, req: Request, res: Response, next: NextFunction) {
  res.status(500).json({ status: 500, error: 'Server error' });
});

module.exports = app;