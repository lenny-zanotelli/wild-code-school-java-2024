import { Component } from '@angular/core';
type Operator = '+' | '-' | '*' | '/';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss',
})
export class CalculatriceComponent {
  numberOne: number = this.getRandomNumber();
  numberTwo: number = this.getRandomNumber();
  currentOperator?: Operator;

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  public generateRandomNumber(type: 'one' | 'two'): void {
    if (type === 'one') {
      this.numberOne = this.getRandomNumber();
    } else {
      this.numberTwo = this.getRandomNumber();
    }
  }

  public setOperator(operator: Operator): void {
    this.currentOperator = operator;
  }

  public setReset(): void {
    this.numberOne = this.getRandomNumber();
    this.numberTwo = this.getRandomNumber();
    this.currentOperator = undefined;
  }

  public calculate(): number | string {
    if (this.currentOperator === null) {
      return 'Choisissez un opérateur';
    }
    switch (this.currentOperator) {
      case '+':
        return this.numberOne + this.numberTwo;
      case '-':
        return this.numberOne - this.numberTwo;
      case '*':
        return this.numberOne * this.numberTwo;
      case '/':
        return this.numberTwo !== 0
          ? this.numberOne / this.numberTwo
          : 'Erreur: Division par zéro';
      default:
        return 'Opérateur non valide';
    }
  }
}
