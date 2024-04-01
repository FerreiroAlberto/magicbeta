import { Component } from '@angular/core';
import { StoreService } from '../../app/core/store.service';
import { MtgCard } from '../../app/model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'isdi-list',
  standalone: true,
  imports: [CardComponent],
  template: `<ul>
    @for(item of cardData; track item.name){
    <isdi-card [card]="item"></isdi-card>
    }
  </ul>`,
  styleUrl: './list.component.css',
})
export class ListComponent {
  cardData: MtgCard[] = [];
  constructor(private store: StoreService) {
    this.loadCards();
  }
  loadCards() {
    this.store.cards$.subscribe((data) => {
      this.cardData = data;
    });
  }
}
