import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-stock',
  templateUrl: './detail-stock.component.html',
  styleUrls: ['./detail-stock.component.scss']
})
export class DetailStockComponent implements OnInit {

  showId: number;

  constructor(public activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.showId = Number(params.id);
    });
  }

}
