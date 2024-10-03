import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterModule, CommonModule, ArticleDetailsComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input() article!: Article;
  @Output() liked = new EventEmitter<string>();

  public onArticleLiked(title: string): void {
    this.liked.emit(title);
    console.log('Article component', title);
  }
}
