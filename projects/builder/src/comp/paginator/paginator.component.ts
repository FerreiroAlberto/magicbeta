import { Component } from '@angular/core';
import { StoreService } from '../../app/core/store.service';

@Component({
  selector: 'isdi-paginator',
  standalone: true,
  imports: [],
  template: `<div>
    <button (click)="changePage(-1)" [disabled]="currentPage < 2">
      Previous
    </button>
    <button (click)="changePage(1)">Next</button>
  </div>`,
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  constructor(private store: StoreService) {}
  currentPage = 1;
  changePage(page: number = this.currentPage) {
    this.currentPage = this.currentPage + page;
    this.store.loadCards(this.currentPage);
  }
}
