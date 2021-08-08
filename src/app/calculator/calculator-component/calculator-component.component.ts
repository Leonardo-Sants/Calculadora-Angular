import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../service';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css']
})
export class CalculatorComponentComponent implements OnInit {

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

}