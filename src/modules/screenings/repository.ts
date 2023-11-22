import type { Database } from '@/database';

export default (db: Database) => ({
  findAll: async (limit = 10, offset = 0) =>
    db
      .selectFrom('screenings')
      .selectAll()
      .limit(limit)
      .offset(offset)
      .execute(),
});