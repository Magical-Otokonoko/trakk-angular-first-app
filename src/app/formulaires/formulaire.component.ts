import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  objForm: {
    name: string,
    email: string
  };

  constructor() {
  }

  ngOnInit(): void {
    this.objForm = {
      name: '',
      email: ''
    };
  }

  submit() {
    console.log(this.objForm);
  }
}
