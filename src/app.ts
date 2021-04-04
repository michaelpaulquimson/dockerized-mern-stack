import { Request, Response } from 'express';
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const songRoutes = require('./routes/api/songs');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/songs', songRoutes);

app.use((req: Request, res: Response) => {
	res.status(404).json({ status: 404, error: 'Not found' });
});

module.exports = app;