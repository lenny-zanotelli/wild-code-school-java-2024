import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type ButtonStyle = 'primary' | 'secondary' | 'danger';
type ButtonSizeStyle = 'small' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() style!: ButtonStyle;
  @Input() size!: ButtonSizeStyle;
  @Input() name: string = '';
  @Input() className: string = '';
  @Output() buttonClick = new EventEmitter<string>();

  public onClick(): void {
    this.buttonClick.emit(this.name);
  }
}
