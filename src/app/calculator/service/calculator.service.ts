/**
 * Serviço responsável por executar as operações da calculadora.
 * 
 * @author Leonardo dos Santos<leo.st@hotmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  /* define as constatntes utilizadas para
   identificar as operações de cálculo */

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que cálcula uma operação matemática dado dois números
   * Suporta as operações soma, subtração, divisão e multiplicação
   * 
   * @param num2 number
   * @param operacao string operação a ser executada
   * @return number Resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // armazena o resultado da operação

    switch(operacao) {
      case CalculatorService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculatorService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculatorService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculatorService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
        default:
          resultado = 0;
    }
    return resultado;
  }
}
