import { Router } from 'express';
import type { Database } from '@/database';
import { jsonRoute } from '@/utils/middleware';
import buildRespository from './repository';

export default (db: Database) => {
  const screenings = buildRespository(db);
  const router = Router();

  router.get(
    '/',
    jsonRoute(async (req, res) => {
      const screeningsList = await screenings.findAll();

      return res.json(screeningsList);
    })
  );

  return router;
};