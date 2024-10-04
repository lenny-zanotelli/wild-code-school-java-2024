import { CommonModule, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface ButtonStyle {
  [key: string]: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() styles: ButtonStyle = {};
  @Input() className: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  public onClick(): void {
    this.buttonClick.emit();
  }
}
