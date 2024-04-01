import { Component } from '@angular/core';
import { StoreService } from '../../app/core/store.service';

@Component({
  selector: 'isdi-filter',
  standalone: true,
  imports: [],
  template: `<div>
    <button (click)="changeColor('G')">Green</button>
    <button (click)="changeTypes('Artifact')">Artifact</button>
    <button (click)="changeColor('R')">Red</button>
    <button (click)="changeColor('U')">Blue</button>
    <button (click)="changeColor('W')">White</button>
    <button (click)="changeColor('B')">Black</button>
    <button (click)="resetFilters()">All</button>
  </div>`,
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  currentColor = '';
  currentTypes = '';
  constructor(private store: StoreService) {}
  changeColor(color: string) {
    this.currentColor = color;
    this.store.loadCards(this.store.currentPage, this.currentColor);
  }
  changeTypes(types: string) {
    this.currentTypes = types;
    this.store.loadCards(
      this.store.currentPage,
      this.store.currentColor,
      types
    );
  }
  resetFilters() {
    this.currentColor = '';
    this.currentTypes = '';
    this.store.loadCards(
      this.store.currentPage,
      this.currentColor,
      this.currentTypes
    );
  }
}
