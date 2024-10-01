import { Routes } from '@angular/router';
import { ArticleComponent } from './features/article/article.component';
import { ContactFormComponent } from './features/contact-form/contact-form.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SignupFormComponent } from './features/signup-form/signup-form.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:slug', component: ArticleComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: '**', component: NotFoundComponent },
];
