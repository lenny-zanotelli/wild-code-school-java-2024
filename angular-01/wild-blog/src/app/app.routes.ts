import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:slug', component: ArticleComponent },
  { path: '**', component: NotFoundComponent },
];
