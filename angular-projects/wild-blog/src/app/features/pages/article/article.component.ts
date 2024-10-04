import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { Article } from '../../../core/models/article.model';
import {
  ButtonComponent,
  ButtonStyle,
} from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ArticleDetailsComponent,
    ButtonComponent,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input() article!: Article;
  @Output() liked = new EventEmitter<Article>();
  buttonStyle: ButtonStyle = 'secondary';

  public likeArticle(): void {
    this.liked.emit(this.article);
  }
}
