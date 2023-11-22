import { Router } from 'express';
import type { Database } from '@/database';
import { jsonRoute } from '@/utils/middleware';
import buildRespository from './repository';
import movies from '@/modules/movies/controller';

export default (db: Database) => {
  const messages = buildRespository(db);
  const router = Router();

  // GET /movies?id=133093,816692
  router.get(
    '/',
    jsonRoute(async (req, res) => {
      const ids = req.query.id?.toString().split(',') ?? [];

      const movieIds = ids.map(Number); // Convert each element to a number

      const movies = await messages.findByIds(movieIds);

      return res.json(movies);
    })
  );

  return router;
};
