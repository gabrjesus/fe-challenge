import { ChangeDetectorRef, Component, HostBinding, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    NavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @HostBinding('class')
  currentTheme: 'light-theme' | 'dark-theme' = 'dark-theme';

  // Previne espaçamento indesejado em dispositivos mobile
  @HostBinding('style.viewHeight') viewHeight: string = '100vh';

  cdr = inject(ChangeDetectorRef);

  isDarkMode: boolean = true;

  title = 'Rick and Morty!';

  ngOnInit(): void {
    this.viewHeight = `${window.innerHeight - 64}px`;
  }

  onThemeChanged() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.currentTheme = 'dark-theme';
    } else {
      this.currentTheme = 'light-theme';
    }
  }
}
