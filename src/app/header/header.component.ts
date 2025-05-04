import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'GYM POWER';
  
  navItems: {name: string, link: string}[] = [
    { name: 'Home', link: '#' },
    { name: 'Products', link: '#' },
    { name: 'About', link: '#' },
    { name: 'Contact', link: '#' }
  ];
}
