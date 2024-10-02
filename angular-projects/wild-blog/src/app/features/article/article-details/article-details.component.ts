import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss',
})
export class ArticleDetailsComponent implements OnInit {
  @Input() article!: Article;
  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const slug = params.get('slug')!;
      this.article = this.articleService.getArticleBySlug(slug)!;
    });
  }
}
