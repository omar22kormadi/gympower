import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Article } from '../model/article.model';


@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatDialogModule
  ],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css'
})
export class EditArticleComponent {
  editedArticle: Article;

  constructor(
    private dialogRef: MatDialogRef<EditArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Article
  ) {
    this.editedArticle = { ...data };
  }

  onSubmit(): void {
    this.dialogRef.close(this.editedArticle);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

