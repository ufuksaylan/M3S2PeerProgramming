import createTestDatabase from '@tests/utils/createTestDatabase';
import { createFor } from '@tests/utils/records';
import buildRepository from '../repository';

const db = await createTestDatabase();
const repository = buildRepository(db);
const createMovies = createFor(db, 'movies');

describe('GET', async () => {
  it('should return empty array when no movies exist', async () => {
    const movies = await repository.findAll();

    expect(movies).toEqual([]);
  });

  it('should return all movies', async () => {
    await createMovies([
      {
        title: 'The Matrix',
        year: 1999,
      },
      {
        title: 'The Matrix Reloaded',
        year: 2003,
      },
    ]);
  });

  const movies = await repository.findAll();

  expect(movies).toEqual([
    {
      title: 'The Matrix',
      year: 1999,
    },
    {
      title: 'The Matrix Reloaded',
      year: 2003,
    },
  ]);
});
