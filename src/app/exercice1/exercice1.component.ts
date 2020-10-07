import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {

  title = 'Ma première application angular';
  username = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
