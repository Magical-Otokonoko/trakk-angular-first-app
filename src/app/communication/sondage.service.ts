import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SondageService {

  pour = 0;
  contre = 0;

  constructor() {
  }

  voterPour(): void {
    this.pour++;
  }

  voterContre(): void {
    this.contre++;
  }
}
