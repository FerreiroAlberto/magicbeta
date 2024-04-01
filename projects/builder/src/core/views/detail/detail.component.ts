import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreService } from '../../../app/core/store.service';
import { MtgCard } from '../../../app/model';

@Component({
  selector: 'isdi-detail',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a [routerLink]="['/home']" routerLinkActive="router-link-active">Home</a>
    </nav>
    <div class="card-details">
      <img [src]="card.imageUrl" alt="Card Image" class="card-image" />
      <div class="detail-list">
        <h2>{{ card.name }}</h2>
        <p><strong>Mana Cost:</strong> {{ card.manaCost }}</p>
        <p><strong>CMC:</strong> {{ card.cmc }}</p>
        <p><strong>Type:</strong> {{ card.types }}</p>
        <p><strong>Text:</strong> {{ card.text }}</p>
        <p><strong>Flavor:</strong> {{ card.flavor }}</p>
        <p><strong>Set Name:</strong> {{ card.setName }}</p>
        <p><strong>Rarity:</strong> {{ card.rarity }}</p>
        <p><strong>Card Number:</strong> {{ card.number }}</p>
        <p><strong>Artist:</strong> {{ card.artist }}</p>
        <p>
          <strong>Is Favorite:</strong> {{ card.isFavorite ? 'Yes' : 'No' }}
        </p>
      </div>
    </div>
  `,
  styles: ``,
})
export default class DetailComponent {
  card: MtgCard = {} as MtgCard;
  constructor(private store: StoreService) {
    this.store.getSelectedCard().subscribe((card) => (this.card = card));
  }
}
