import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  catList: Category[] = [];
  productList: ProductShopping[] = [];
  basketList: ProductShopping[] = [];
  productListFiltered: ProductShopping[] = [];

  totalBasket = 0;

  newIdCat = 1;
  newIdProduct = 1;

  constructor() {
  }

  ngOnInit(): void {
    if (localStorage.getItem('catlist')) {
      this.catList = JSON.parse(localStorage.getItem('catlist'));
      this.newIdCat = this.catList.length + 1;

      if (localStorage.getItem('productlist')) {
        this.productList = JSON.parse(localStorage.getItem('productlist'));
        this.newIdProduct = this.productList.length + 1;
        this.productListFiltered = this.productList;
      }
    }

    if (localStorage.getItem('basketlist')) {
      this.basketList = JSON.parse(localStorage.getItem('basketlist'));
      this.basketList.forEach(bp => this.totalBasket += bp.price);
    }
  }

  addCat(newCat: HTMLInputElement): void {
    if (this.catList.find(c => c.name === newCat.value) == null) {
      this.catList.push({
        id: this.newIdCat,
        name: newCat.value
      });
      localStorage.setItem('catlist', JSON.stringify(this.catList));
      newCat.value = null;
      this.newIdCat++;
    }
  }

  addProduct(prodname: HTMLInputElement, prodprice: HTMLInputElement, select: HTMLSelectElement, prodquant: HTMLInputElement) {
    if (this.productList.find(p => p.name === prodname.value) == null) {
      this.productList.push({
        id: this.newIdProduct,
        name: prodname.value,
        cat: this.catList.find(cat => cat.name === select.value),
        price: Number(prodprice.value),
        stockQuantity: Number(prodquant.value)
      });
      this.newIdProduct++;
      localStorage.setItem('productlist', JSON.stringify(this.productList));
      this.refreshProductInputs(prodname, prodprice, prodquant);
    }
  }

  refreshProductInputs(prodname: HTMLInputElement, prodprice: HTMLInputElement, prodquant: HTMLInputElement): void {
    prodname.value = null;
    prodprice.value = null;
    prodquant.value = null;
  }

  removeProd(p: ProductShopping): void {
    this.basketList.splice(this.basketList.indexOf(p), 1);
    localStorage.setItem('basketlist', JSON.stringify(this.basketList));
    this.productList.find(pr => pr.id === p.id).stockQuantity++;
    this.totalBasket -= p.price;
  }

  buy(p: ProductShopping): void {
    p.stockQuantity--;
    this.basketList.push({
      id: p.id,
      name: p.name,
      price: p.price,
      stockQuantity: 1,
      cat: this.catList.find(c => c.id === p.cat.id)
    });
    this.totalBasket += p.price;
    localStorage.setItem('basketlist', JSON.stringify(this.basketList));
  }

  filter(selectcat: HTMLSelectElement): void {
    if (selectcat.value === 'ALL') {
      this.productListFiltered = this.productList;
    } else {
      this.productListFiltered = this.productList.filter(p => p.cat.name === selectcat.value);
    }
  }
}

export interface Category {
  id: number;
  name: string;
}

export interface ProductShopping {
  id: number;
  name: string;
  cat: Category;
  price: number;
  stockQuantity: number;
}

export const test = 'Bonjour';
