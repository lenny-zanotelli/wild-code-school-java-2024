import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from './article.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  article: Article | undefined;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}
  ngOnInit(): void {
    const articleSlug = this.route.snapshot.paramMap.get('slug');
    if (articleSlug) {
      this.article = this.articleService.getArticleBySlug(articleSlug);
    }
  }
}
