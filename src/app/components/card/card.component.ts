import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { ICharacter } from '../../models/character.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() item: ICharacter | null = null;
}
