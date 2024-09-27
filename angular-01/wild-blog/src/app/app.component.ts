import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { CatalogComponent } from "./catalog/catalog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponentComponent, MonComposantComponent, CatalogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Bienvenue sur le Wild Blog de Lenny !';
}
