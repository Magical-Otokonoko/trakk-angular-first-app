import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  itemId: number;

  constructor(public activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.itemId = Number(params.id);
    });
  }

}
