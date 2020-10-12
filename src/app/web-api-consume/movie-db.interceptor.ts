import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieDBService} from './movie-db.service';

@Injectable()
export class MovieDBInterceptor implements HttpInterceptor {


  constructor(
    private movieDBService: MovieDBService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.startsWith(this.movieDBService.BASE_URL)) {
      request = request.clone({
        url: request.url + '?api_key=' + this.movieDBService.API_KEY,
      });
    }

    return next.handle(request);
  }
}
