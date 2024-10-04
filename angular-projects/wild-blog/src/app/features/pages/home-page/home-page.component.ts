import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ArticleComponent } from '../article/article.component';
import { ArticleService } from '../article/article.service';
import { Article } from '../../../core/models/article.model';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ArticleComponent, ButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  buttonNames: string[] = [
    'bouton1',
    'bouton2',
    'bouton3',
    'bouton4',
    'bouton5',
  ];
  clickMessage: string = '';
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

  public onButtonClick(buttonName: string): void {
    alert(`${buttonName} a été cliqué`);
  }
}
