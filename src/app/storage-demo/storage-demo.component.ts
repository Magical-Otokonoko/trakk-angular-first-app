import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-storage-demo',
  templateUrl: './storage-demo.component.html',
  styleUrls: ['./storage-demo.component.scss']
})
export class StorageDemoComponent implements OnInit {

  affichage: string;

  obj = {
    name: 'Greg',
    age: 40
  };

  constructor() {
  }

  ngOnInit(): void {
    if (!localStorage.getItem('demo')) {
      localStorage.setItem('demo', 'Bonjour je suis sauvegardé');
    }

    if (!localStorage.getItem('obj')) {
      localStorage.setItem('obj', JSON.stringify(this.obj));
    }

    this.affichage = localStorage.getItem('demo');
  }

}
