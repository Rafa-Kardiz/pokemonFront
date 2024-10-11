import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PokeCardComponent } from '@app/components';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [PokeCardComponent, MatPaginatorModule],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
