import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Article } from '../../core/models/article.model';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input() article!: Article;
}
