import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:slug', component: ArticleComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: '**', component: NotFoundComponent },
];
