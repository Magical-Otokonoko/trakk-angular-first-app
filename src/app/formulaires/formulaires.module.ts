import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormulaireComponent} from './formulaire.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormulairesModule {
}
