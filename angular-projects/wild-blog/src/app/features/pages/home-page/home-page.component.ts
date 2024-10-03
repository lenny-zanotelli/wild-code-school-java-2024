import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ArticleComponent } from '../article/article.component';
import { ArticleService } from '../article/article.service';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  articles: Article[] = [];
  likedMessage: string = '';

  router: Router = inject(Router);
  articleService: ArticleService = inject(ArticleService);

  public ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

  public getColorByLikes(likes: number): string {
    return likes > 150 ? 'green' : 'black';
  }
  public navigateToArticle(slug: string) {
    this.router.navigate(['/article', slug]);
  }

  public onArticleLiked(title: string): void {
    this.likedMessage = `L'article "${title}" vient d'être liké.`;
    console.log('Home page component', this.likedMessage);
  }
}
