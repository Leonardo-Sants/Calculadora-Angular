import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponentComponent } from './calculator-component';
import { CalculatorService } from './service';



@NgModule({
  declarations: [
    CalculatorComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorComponentComponent
  ],
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
