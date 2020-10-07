import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SondageService} from '../sondage.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() name: string;

  @Output() pour: EventEmitter<number> = new EventEmitter<number>();

  @Output() contre: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    public service: SondageService
  ) {
  }

  ngOnInit(): void {
  }

  votePour(): void {
    this.pour.emit(1);
  }

  voteContre(): void {
    this.contre.emit(1);
  }
}
