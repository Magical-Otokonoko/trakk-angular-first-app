import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  variable = 'Affichage de ma donnée depuis le .ts';
  champs: string;
  color: string;

  incrementation = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  affichage(): string {
    return 'Affiche moi!';
  }

  afficheDiv(myDiv: HTMLDivElement): string {
    return myDiv.innerHTML;
  }
  incr(): void {
    this.incrementation++;
  }
}
