import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  objForm: {
    name: string,
    email: string,
    genre: Genre
  };

  reactForm: FormGroup;

  constructor(
    private builder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.objForm = {
      name: '',
      email: '',
      genre: Genre.M
    };
    this.reactForm = this.builder.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/^([^0-9]*)$/),
        Validators.minLength(2),
        Validators.maxLength(20)
      ]
      ],
      email: ['', [Validators.required, Validators.email]],
      genre: [Genre.F, noEmptyValueFromSelectValidator()],
      pwd: [''],
      confirm: ['']
    }, {validators: [confirmPasswordValidator]});
  }

  submit(): void {
    console.log(this.objForm);
  }

  getEnumValues(): string[] {
    return ['Male', 'Female', 'Noop'];
  }

  submitReactive(): void {
    console.log(this.reactForm.value);
  }
}

export enum Genre {
  M = 'Male',
  F = 'Female',
  X = 'Noop'
}

export function noEmptyValueFromSelectValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return control.value === '' ? {noEmptyValue: {value: 'empty string'}} : null;
  };
}

export const confirmPasswordValidator: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
  const pwd = group.get('pwd').value;
  const confirm = group.get('confirm').value;
  return pwd === confirm ? null : {pwdConfirm: true};
};

