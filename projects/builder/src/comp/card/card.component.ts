import { Component, Input } from '@angular/core';
import { MtgCard } from '../../app/model';
import { Router, RouterModule } from '@angular/router';
import { StoreService } from '../../app/core/store.service';

@Component({
  selector: 'isdi-card',
  standalone: true,
  imports: [RouterModule],
  template: `<li>
    <img
      [src]="card.imageUrl"
      [alt]="card.name"
      (click)="sendDetails()"
      (keydown)="handleKeydown($event)"
      tabindex="0"
      width="200"
    />
    <p>{{ card.name }}</p>
  </li>`,
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private router: Router, private store: StoreService) {}
  @Input({ required: true }) card!: MtgCard;
  sendDetails() {
    this.store.selectCard(this.card);
    this.router.navigate(['/detail', this.card.number]);
  }
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendDetails();
    }
  }
}
