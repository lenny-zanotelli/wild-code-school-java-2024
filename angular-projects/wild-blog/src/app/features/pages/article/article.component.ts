import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { Article } from '../../../core/models/article.model';
import { ButtonComponent } from '../../../shared/components/button/button.component';

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

  likeBtnStyles = {
    'background-color': '#f0f0f0',
    margin: '0 0.5rem',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  public likeArticle(): void {
    console.log('LIKER', this.article);
    this.liked.emit(this.article);
  }
}
