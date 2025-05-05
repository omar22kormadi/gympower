import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/articles.service';
import { EditArticleComponent } from '../edit-article/edit-article.component';
import { DeleteArticleComponent } from '../delete-article/delete-article.component';


@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() articleDeleted = new EventEmitter<void>();
  
  constructor(
    private dialog: MatDialog,
    private articleService: ArticleService
  ) {}

  onEdit(): void {
    const dialogRef = this.dialog.open(EditArticleComponent, {
      data: this.article
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.articleService.updateArticle(this.article._id, result).subscribe({
          next: (updatedArticle) => {
            Object.assign(this.article, updatedArticle);
          },
          error: (error) => {
            console.error('Error updating article:', error);
          }
        });
      }
    });
  }

  onDelete(): void {
    const dialogRef = this.dialog.open(DeleteArticleComponent, {
      data: { nomArt: this.article.nomArt }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.articleService.deleteArticle(this.article._id).subscribe({
          next: () => {
            this.articleDeleted.emit();
          },
          error: (error) => {
            console.error('Error deleting article:', error);
          }
        });
      }
    });
  }
}