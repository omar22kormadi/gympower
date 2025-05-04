import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-article-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  article = {
    nomArt: '',
    description: '',
    price: 0,
    image: ''
  };

  constructor(private dialogRef: MatDialogRef<AddArticleComponent>) {}

  onSubmit(): void {
    this.dialogRef.close(this.article);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
