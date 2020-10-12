import {Component, OnInit} from '@angular/core';
import {GolfConsumerService} from './golf-consumer.service';

@Component({
  selector: 'app-golf-consumer',
  templateUrl: './golf-consumer.component.html',
  styleUrls: ['./golf-consumer.component.scss']
})
export class GolfConsumerComponent implements OnInit {

  parcours: Parcours[];

  constructor(
    private service: GolfConsumerService
  ) {
  }

  ngOnInit(): void {
    this.service.getAllParcours().subscribe(result => this.parcours = result);

  }

}

export interface Parcours {
  id: number;
  nom: string;
  email: string;
  typeParcours: string;
  dateCreation: Date;
  dateModification: Date;
  trous: Trou[] | null;
}

export interface Trou {
  id: number;
  typeTrou: string;
  distance: number;
  parcours: Parcours | null;
}
