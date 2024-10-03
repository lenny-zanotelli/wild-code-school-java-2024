import { Routes } from '@angular/router';
import { ContactFormComponent } from './features/forms/contact-form/contact-form.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SignupFormComponent } from './features/forms/signup-form/signup-form.component';
import { LoginFormComponent } from './features/forms/login-form/login-form.component';
import { ArticleDetailsComponent } from './features/pages/article/article-details/article-details.component';
import { HomePageComponent } from './features/pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:slug', component: ArticleDetailsComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '**', component: NotFoundComponent },
];
