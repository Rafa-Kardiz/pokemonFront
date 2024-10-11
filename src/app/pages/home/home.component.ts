import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent, MainContainerComponent } from '@app/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
