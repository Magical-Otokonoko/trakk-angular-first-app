import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  BASE_URL = 'https://api.themoviedb.org/3/';

  API_KEY = 'c0a9b5c2b86a3a47c52b9821d59430c2';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getPopularMovies(): Observable<PageDiscover> {
    return this.httpClient.get<PageDiscover>(this.BASE_URL + 'discover/movie', {
      params: {
        sort_by: 'popularity.desc',
        page: '2'
      }
    });
  }
}
export interface Result {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface PageDiscover {
  page: number;
  total_results: number;
  total_pages: number;
  results: Result[];
}
