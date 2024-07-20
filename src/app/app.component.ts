import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, ContentComponent],
  templateUrl: `./app.component.html`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  greet() {
    this.state = !this.state
  }

  title = 'Angular 17 App';
  user = 'Jose Flores'
  state = false
}
