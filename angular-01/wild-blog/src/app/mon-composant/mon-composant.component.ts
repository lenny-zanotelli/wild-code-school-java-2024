import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mon-composant',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mon-composant.component.html',
  styleUrl: './mon-composant.component.scss',
})
export class MonComposantComponent {
  name: string = 'Bob';
  imageSrc: string = 'https://via.placeholder.com/350x150';

  sayHello(): void {
    alert('Bonjour !');
  }
}
