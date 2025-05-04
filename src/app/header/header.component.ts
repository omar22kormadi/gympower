import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddArticleComponent } from '../add-article/add-article.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AddArticleComponent],
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

  constructor(private dialog: MatDialog) {}

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddArticleComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('New article:', result);
        // Here you would typically call a service to add the article
      }
    });
  }
}