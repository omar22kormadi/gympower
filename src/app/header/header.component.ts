import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddArticleComponent } from '../add-article/add-article.component';
import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'GYM POWER';
  
  navItems: {name: string, link: string}[] = [
    { name: 'Home', link: '#' },
    { name: 'Products', link: '#' },
    { name: 'About', link: '#' },
    { name: 'Contact', link: '#' }
  ];

  constructor(
    private dialog: MatDialog,
    private articleService: ArticleService
  ) {}

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddArticleComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.articleService.addArticle(result).subscribe({
          next: (newArticle) => {
            console.log('Article added successfully:', newArticle);
          },
          error: (error) => {
            console.error('Error adding article:', error);
          }
        });
      }
    });
  }
}