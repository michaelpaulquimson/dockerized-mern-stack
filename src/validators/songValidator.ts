import { Request, Response, NextFunction } from 'express';
const { body, validationResult } = require('express-validator');

const songValidationRules = () => {
  return [
    body('name').trim().not().isEmpty().withMessage('Name is required'),
    body('artist').trim().not().isEmpty().withMessage('Artist is required'),
    body('genre').trim().not().isEmpty().withMessage('Genre is required'),
  ];
};

const validateSong = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];

  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(400).json({
    status: 400,
    errors: extractedErrors,
  });
};

module.exports = {
  songValidationRules,
  validateSong,
};