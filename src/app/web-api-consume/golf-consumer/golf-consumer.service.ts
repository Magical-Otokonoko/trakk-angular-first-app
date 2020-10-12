import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Parcours} from './golf-consumer.component';

@Injectable({
  providedIn: 'root'
})
export class GolfConsumerService {

  API_BASE_URL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllParcours(): Observable<Parcours[]> {
    return this.httpClient.get<Parcours[]>(this.API_BASE_URL + 'parcours', {
      headers: {
        Authorization: 'Basic ' + btoa('greg:1234')
      }
    });
  }
}
