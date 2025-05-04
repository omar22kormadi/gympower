import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Article } from '../model/article.model';
import { DeleteArticleComponent } from '../delete-article/delete-article.component';
import { EditArticleComponent } from '../edit-article/edit-article.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule,DeleteArticleComponent , EditArticleComponent],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  @Input() article!: Article;
  
  constructor(private dialog: MatDialog) {}

  onEdit(): void {
    const dialogRef = this.dialog.open(EditArticleComponent, {
      data: this.article
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Updated article:', result);
        // Here you would typically call a service to update the article
      }
    });
  }

  onDelete(): void {
    const dialogRef = this.dialog.open(DeleteArticleComponent, {
      data: { nomArt: this.article.nomArt }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Delete article:', this.article.id);
        // Here you would typically call a service to delete the article
      }
    });
  }
}
