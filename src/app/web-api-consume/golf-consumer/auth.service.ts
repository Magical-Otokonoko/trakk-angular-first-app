import {Injectable} from '@angular/core';
import {Observable, of, pipe} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_BACK_URL = 'http://localhost:8080/';

  redirectUrl: string;

  isLogged = false;

  constructor(public router: Router,
              public httpClient: HttpClient) {
  }

  login(formValue: { username: string; password: string }): Observable<boolean> {
    this.httpClient.post <{
      username: string,
      password: string
    }>(this.BASE_BACK_URL + 'users/auth', formValue).subscribe(value => console.log(value));
    return of(true);
  }

  logout(): void {
    this.isLogged = false;
  }
}
