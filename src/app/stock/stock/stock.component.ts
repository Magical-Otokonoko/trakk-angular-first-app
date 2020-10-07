import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  displayedColumns: string[] = ['title', 'description', 'stockQuantity', 'price', 'actions'];
  dataSource = stock;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(produit: Produit): void {
    const produitUpdate = stock.find((p) => p === produit);
    if (produitUpdate.stockQuantity > 0) {
      produitUpdate.stockQuantity--;
    }
  }
}

export interface Produit {
  id: number;
  title: string;
  description: string;
  price: number;
  stockQuantity: number;
  creationDate: string;
}

const stock: Produit[] = [{
  id: 1,
  stockQuantity: 1,
  title: 'produit1',
  description: 'description',
  price: 4,
  creationDate: new Date(2020, 9, 12).toLocaleDateString()
}, {
  id: 2,
  stockQuantity: 0,
  title: 'produit2',
  description: 'description',
  price: 3,
  creationDate: new Date(2020, 9, 12).toLocaleDateString()
}, {
  id: 3,
  stockQuantity: 10,
  title: 'produit3',
  description: 'description',
  price: 3,
  creationDate: new Date(2020, 9, 12).toLocaleDateString()
}];


