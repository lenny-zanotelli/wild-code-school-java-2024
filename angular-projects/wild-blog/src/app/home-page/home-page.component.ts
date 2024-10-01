import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../models/article.model';
import { ArticleService } from '../article/article.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  articles: Article[] = [];
  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

  public getColorByLikes(likes: number): string {
    return likes > 150 ? 'green' : 'black';
  }
  public navigateToArticle(slug: string) {
    this.router.navigate(['/article', slug]);
  }
}
