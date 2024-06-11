import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NoResultsComponent } from './components/no-results/no-results.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NoResultsComponent, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isFirstSearch: boolean = true;

  list = [];
}
