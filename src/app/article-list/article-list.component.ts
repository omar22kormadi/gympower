import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';
import { RouterModule } from '@angular/router';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [RouterModule, ArticleItemComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.loadArticles();
    this.totalPages = this.articleService.getTotalPages();
  }

  loadArticles(): void {
    this.articles = this.articleService.getArticles(this.currentPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadArticles();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadArticles();
    }
  }
}
