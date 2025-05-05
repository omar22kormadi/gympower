import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../model/article.model';

interface PaginatedResponse {
  articles: Article[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:5000/api/articles';

  constructor(private http: HttpClient) {}

  getArticles(page: number = 1, itemsPerPage: number = 6): Observable<PaginatedResponse> {
    return this.http.get<PaginatedResponse>(`${this.apiUrl}?page=${page}&limit=${itemsPerPage}`);
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.apiUrl}/add`, article);
  }

  updateArticle(id: string, article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.apiUrl}/${id}`, article);
  }

  deleteArticle(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getArticleById(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  getTotalPages(itemsPerPage: number = 6): number {
    // This will need to be updated once we implement pagination in the backend
    return 1;
  }
}