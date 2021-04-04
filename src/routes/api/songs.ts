import { Request, Response, NextFunction } from 'express';
const { Router } = require('express');
const { songValidationRules, validateSong } = require('../../validators/songValidator');
const router = Router();
import SongsService from '../../services/SongsService';

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	SongsService.getAllSongs(req, res, next);
});

router.post('/', songValidationRules(), validateSong, async (req: Request, res: Response, next: NextFunction) => {
	SongsService.createSong(req, res, next);
});

router.put('/:id', songValidationRules(), validateSong, async (req: Request, res: Response, next: NextFunction) => {
  SongsService.updateSong(req, res, next);
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  SongsService.deleteSong(req, res, next);
});

module.exports = router;