import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieService,
      ]
    });

    service = TestBed.get(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMovieList', () => {
    it('should return the contents of MOVIE_LIST', async () => {
      const list = await service.getMovieList();

      expect(list.length).toEqual(3);
      expect(list[0].title).toEqual('Jurassic Park');
      expect(list[1].title).toEqual('Stargate');
      expect(list[2].title).toEqual('Napoleon Dynamite');
    });
  });
});
