import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export const shoppingList: Item[] = [];

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'price', 'actions'];
  dataSource: Item[];

  constructor(public router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = shoppingList;
  }

  removeItem(item: Item): void {
    shoppingList.splice(shoppingList.lastIndexOf(item), 1);
    this.router.navigateByUrl('/shopping-list').then();
  }

  saveList(): void {
    shoppingList.forEach(item => localStorage.setItem(item.title, JSON.stringify(item)));
  }


}


export interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  stockQuantity: number;
}
