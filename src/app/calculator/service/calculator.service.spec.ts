import { inject, TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it( 'deve garantir que 1 + 4 = 5',
    inject ([CalculatorService], (service: CalculatorService) => {
      let soma = service.calcular(1,4, CalculatorService.SOMA);
      expect(soma).toEqual(5);
    }) 
  );
  
  it( 'deve garantir que 1 - 4 = -3',
    inject ([CalculatorService], (service: CalculatorService) => {
      let subtracao = service.calcular(1,4, CalculatorService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    }) 
  );
  
  it( 'deve garantir que 1 / 4 = 0.25',
    inject ([CalculatorService], (service: CalculatorService) => {
      let divisao = service.calcular(1,4, CalculatorService.DIVISAO);
      expect(divisao).toEqual(0.25);
    }) 
  );

  it( 'deve garantir que 1 * 4 = 4',
    inject ([CalculatorService], (service: CalculatorService) => {
      let multiplicacao = service.calcular(1,4, CalculatorService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(4);
    }) 
  );

  it( 'deve retornar 0 para operação invalida',
    inject ([CalculatorService], (service: CalculatorService) => {
      let opInvalida = service.calcular(1,4, '%');
      expect(opInvalida).toEqual(0);
    }) 
  );


});
