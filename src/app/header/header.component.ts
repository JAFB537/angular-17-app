import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  @Input() numberOption = 0

  setNumberOption(input = 0) {
    this.numberOption = input
  }

  options = [
    {
      id: 1,
      name: 'Option1',
      path: '#',
      click: undefined
    },
    {
      id: 2,
      name: 'Option2',
      path: '#',
      click: undefined
    },
    {
      id: 3,
      name: 'Option3',
      path: '#',
      click: undefined
    },
    {
      id: 4,
      name: 'Option4',
      path: '#',
      click: undefined
    },
  ];
}
