import {Component, OnInit} from '@angular/core';
import {from, interval, Observable, of} from 'rxjs';
import {filter, map, reduce, tap} from 'rxjs/operators';
import {Bike, DataService} from './data.service';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss']
})
export class ObservableDemoComponent implements OnInit {

  timer = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toTimeString()), 1000);
  });

  myObs = of(42).pipe(
    tap(x => console.log('Type Variable initiale : ' + typeof x)),
    map(x => Math.sqrt(x)),
    map(x => String(x)),
    tap(x => console.log('Type Variable transformée : ' + typeof x))
  );

  value = 5;
  manualSuscription: number;

  myObsTab = from([1, 2, 3, 4, 5, 6, 7, 8, 9]).pipe(
    filter(x => x % 2 === 0),
    tap(x => console.log(x)),
    reduce((x, y) => {
      this.value = x + y;
      return x + y;
    })
  );

  myObsInterval = interval(2);

  bikes$: Observable<Bike[]>;
  bikeTOFind: Bike;

  constructor(
    public service: DataService
  ) {
  }

  ngOnInit(): void {
    this.myObsTab.subscribe(result => this.manualSuscription = result);
    this.bikes$ = this.service.getAllBikes();
  }

  find(value: string): void {
    this.service.getById(parseInt(value, 10)).subscribe(result => this.bikeTOFind = result);
  }
}
