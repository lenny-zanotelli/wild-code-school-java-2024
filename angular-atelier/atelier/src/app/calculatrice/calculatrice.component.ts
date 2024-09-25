import { Component } from '@angular/core';
import { CalculatriceService } from './calculatrice.service';
import { NumberDisplay, Operator } from './calculatrice.type';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss',
})
export class CalculatriceComponent {
  constructor(private calculatriceService: CalculatriceService) {}

  public generateNumber(type: NumberDisplay): void {
    this.calculatriceService.generateRandomNumber(type);
  }

  public setOperator(operator: Operator): void {
    this.calculatriceService.setOperator(operator);
  }

  public setReset(): void {
    this.calculatriceService.setReset();
  }

  public calculate(): string | number {
    return this.calculatriceService.calculate();
  }

  get numberOne(): number {
    return this.calculatriceService.numberOne;
  }

  get numberTwo(): number {
    return this.calculatriceService.numberTwo;
  }

  get currentOperator(): string | undefined {
    return this.calculatriceService.currentOperator;
  }
}
