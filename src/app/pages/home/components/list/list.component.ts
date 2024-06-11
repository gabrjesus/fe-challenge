import { Component, Input } from '@angular/core';
import { ICharacter } from '../../../../models/character.model';
import { CardComponent } from '../../../../components/card/card.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() list$ = new Observable<ICharacter[]>();
}
