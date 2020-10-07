import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  stock: Product[] = [{
    id: 1,
    title: 'Ecran',
    description: 'Ecran plat de 24',
    price: 199.95,
    stockQuantity: 5,
    creationDate: '2020-07-12'
  },
    {
      id: 2,
      title: 'Souris',
      description: 'Souris gaming',
      price: 85.95,
      stockQuantity: 2,
      creationDate: '2020-09-25'
    },
    {
      id: 3,
      title: 'Clavier',
      description: 'clavier mécanique de mer...',
      price: 4.25,
      stockQuantity: 4,
      creationDate: '2020-10-01'
    },
    {
      id: 4,
      title: 'Laptop DELL',
      description: 'Pc portable DELL haute performance',
      price: 965.40,
      stockQuantity: 3,
      creationDate: '2020-06-10'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  buy(p: Product): void {
    p.stockQuantity--;
  }
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  stockQuantity: number;
  creationDate: string;
}
