import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface User {
  title: string;
  age: number;
  image: string;
  alt: string;
  citation: string;
}

@Component({
  selector: 'app-card-atelier',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card-atelier.component.html',
  styleUrl: './card-atelier.component.scss',
})
export class CardAtelierComponent {
  user: User = {
    title: 'Hello John',
    age: 25,
    image: 'https://via.placeholder.com/150',
    alt: 'placeholder',
    citation: '',
  };

  getCitation(): void {
    return console.log(this.user.citation);
  }
}
