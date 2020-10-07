import {Component, OnInit} from '@angular/core';
import {Item, ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {ActivatedRoute} from '@angular/router';
import {shoppingList} from '../shopping-list/shopping-list.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  id: number;
  displayedColumns: string[] = ['title', 'description', 'stockQuantity', 'price', 'actions'];
  dataSource: Item[];
  currentCategory: Category;


  constructor(public activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.id = Number(params.id);
      this.currentCategory = categories.find(item => item.id === this.id);
      this.dataSource = this.currentCategory.itemList;
    });
  }
  addItem(item: Item): void {
    shoppingList.push(item);
  }


}

export interface Category {
  itemList: Item[];
  id: number;
  title: string;
}

const categories = [{
  id: 1,
  title: 'feet',
  itemList: [{
    id: 1,
    stockQuantity: 1,
    title: 'produit1',
    description: 'description',
    price: 4
  }, {
    id: 2,
    stockQuantity: 10,
    title: 'produit2',
    description: 'description',
    price: 4,
    creationDate: new Date(2020, 9, 12).toLocaleDateString()
  }]
}, {
  id: 2,
  title: 'vanilla',
  itemList: [{
    id: 3,
    stockQuantity: 1,
    title: 'produit3',
    description: 'description',
    price: 4
  }, {
    id: 4,
    stockQuantity: 10,
    title: 'produit4',
    description: 'description',
    price: 4,
    creationDate: new Date(2020, 9, 12).toLocaleDateString()
  }]

}];
