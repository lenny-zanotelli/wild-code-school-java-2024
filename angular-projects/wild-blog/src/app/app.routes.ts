import { Routes } from '@angular/router';
import { ContactFormComponent } from './features/contact-form/contact-form.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SignupFormComponent } from './features/signup-form/signup-form.component';
import { ArticleDetailsComponent } from './features/article/article-details/article-details.component';
import { LoginFormComponent } from './features/login-form/login-form.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:slug', component: ArticleDetailsComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '**', component: NotFoundComponent },
];
