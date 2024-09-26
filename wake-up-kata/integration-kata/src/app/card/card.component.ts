import { Component } from '@angular/core';

interface Card {
  title: string;
  description: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cards: Card[] = [
    {
      title: 'Produit 1',
      description: 'Ceci est une courte description du produit',
      image: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    {
      title: 'Produit 2',
      description: 'Ceci est une courte description du produit',
      image: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    {
      title: 'Produit 3',
      description: 'Ceci est une courte description du produit',
      image: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    {
      title: 'Produit 4',
      description: 'Ceci est une courte description du produit',
      image: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    {
      title: 'Produit 5',
      description: 'Ceci est une courte description du produit',
      image: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    {
      title: 'Produit 6',
      description: 'Ceci est une courte description du produit',
      image: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    {
      title: 'Produit 7',
      description: 'Ceci est une courte description du produit',
      image: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    {
      title: 'Produit 8',
      description: 'Ceci est une courte description du produit',
      image: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
    {
      title: 'Produit 9',
      description: 'Ceci est une courte description du produit',
      image: 'https://via.placeholder.com/150',
      alt: 'placeholder',
    },
  ];
}
