import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ MatToolbarModule, NgOptimizedImage ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoPath = 'https://media.graphassets.com/ICaTD6YGQSo2F74mj6Y7';
}
