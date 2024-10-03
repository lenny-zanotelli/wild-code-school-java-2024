import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Article } from '../../../../core/models/article.model';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss',
})
export class ArticleDetailsComponent implements OnInit {
  @Input() article!: Article;
  @Output() liked = new EventEmitter<Article>();

  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const slug = params.get('slug')!;
      this.article = this.articleService.getArticleBySlug(slug)!;
    });
  }

  public likeArticle(): void {
    console.log('LIKER', this.article.title);
    this.liked.emit(this.article);
  }
}
