import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ArticleService } from '../services/articles.service';
import { Article } from '../model/article.model';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleItemComponent, MatProgressSpinnerModule],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  loading: boolean = true;
  error: string | null = null;
  itemsPerPage: number = 6;
  
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.loadArticles();
   
  }

  loadArticles(): void {
    this.loading = true;
    this.error = null;
    this.articleService.getArticles(this.currentPage, this.itemsPerPage).subscribe({
      next: (response) => {
        this.articles = response.articles;
        this.currentPage = response.currentPage;
        this.totalPages = response.totalPages;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load articles. Please try again later.';
        this.loading = false;
        console.error('Error loading articles:', error);
      }
    });
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