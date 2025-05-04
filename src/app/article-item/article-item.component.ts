import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Article } from '../model/article.model';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  @Input() article!: Article;
  
  constructor() { }
}
