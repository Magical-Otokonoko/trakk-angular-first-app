import {Component, OnInit} from '@angular/core';
import {test} from '../shopping/shopping.component';
import {SondageService} from './sondage.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  names = ['Greg', 'Laurent', 'Corentin'];

  pour = 0;
  contre = 0;

  constructor(
    public service: SondageService
  ) {
  }

  ngOnInit(): void {
  }

  ajouterPour($event: number) {
    this.pour += $event;
    console.log(test);
  }

  ajouterContre($event: number) {
    this.contre += $event;
  }
}
