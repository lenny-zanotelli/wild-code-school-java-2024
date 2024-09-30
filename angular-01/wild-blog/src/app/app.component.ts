import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { CommonModule } from '@angular/common';
interface Article {
  title: string;
  author: string;
  content: string;
  image: string;
  isPublished: boolean;
  comment: string;
  likes: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Bienvenue sur le Wild Blog de Lenny !';

  articles: Article[] = [
    {
      title: 'Angular 16: Les nouveautés',

      author: 'Alice',

      content: "Les nouveautés d'Angular 16 incluent...",

      image: 'https://via.placeholder.com/350x150',

      isPublished: true,

      comment: '',

      likes: 120,
    },

    {
      title: 'Développer une API REST',

      author: 'Bob',

      content: 'Développer une API REST nécessite...',

      image: 'https://via.placeholder.com/350x150',

      isPublished: false,

      comment: '',

      likes: 75,
    },

    {
      title: 'Pourquoi TypeScript est essentiel ?',

      author: 'Charlie',

      content: 'TypeScript apporte de la robustesse...',

      image: 'https://via.placeholder.com/350x150',

      isPublished: true,

      comment: '',

      likes: 200,
    },
  ];
  public getColorByLikes(likes: number): string {
    return likes > 150 ? 'green' : 'black';
  }
}
