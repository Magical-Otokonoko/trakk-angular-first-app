import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  bikes: Bike[] = [
    {
      id: 1,
      name: 'VTT',
      color: null,
      brand: 'Scott USA'
    },
    {
      id: 2,
      name: 'CITY BIKE',
      color: 'red',
      brand: 'Cannondale'
    },
    {
      id: 3,
      name: 'Electric VTT',
      color: 'green',
      brand: 'Maverick'
    },
  ];

  constructor() {
  }

  getAllBikes(): Observable<Bike[]> {
    return of(this.bikes);
  }
  getById(id: number): Observable<Bike> {
    return of(this.bikes).pipe(
      map(bike => bike.find(b => b.id === id))
    );
  }
}

export interface Bike {
  id: number;
  name: string;
  color: string;
  brand: string;
}
