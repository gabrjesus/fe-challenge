import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NoResultsComponent } from './components/no-results/no-results.component';
import { ListComponent } from './components/list/list.component';
import { ICharacter } from '../../models/character.model';
import { CardComponent } from '../../components/card/card.component';
import { CharacterService } from '../../services/character.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NoResultsComponent, ListComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isFirstSearch: boolean = true;

  characterService = inject(CharacterService);

  list$ = new Observable<ICharacter[]>();

  ngOnInit(): void {
    this.list$ = this.characterService.getAll().pipe(map(response => response.results));
  }
}
