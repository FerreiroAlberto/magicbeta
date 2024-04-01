import { Injectable } from '@angular/core';
import { RepoService } from './repo.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { MtgCard } from '../model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private cards = new BehaviorSubject<MtgCard[]>([]);
  public cards$ = this.cards.asObservable();
  private detailCard = new BehaviorSubject<MtgCard>({} as MtgCard);
  public detailCard$ = this.detailCard.asObservable();
  currentPage: number = 1;
  currentColor: string = '';
  currentTypes: string = '';
  constructor(private repo: RepoService) {
    this.loadCards();
  }

  loadCards(
    page: number = this.currentPage,
    color: string = this.currentColor,
    types: string = this.currentTypes
  ) {
    this.repo.getList(page, color, types).subscribe({
      next: (data) => {
        const noImageCards = data.cards.filter((item) => !item.imageUrl);
        const imageCards = data.cards.filter((item) => item.imageUrl);
        noImageCards.forEach(
          (item) => (item.imageUrl = 'assets/card_back.jpeg')
        );
        this.cards.next([...imageCards, ...noImageCards]);
        this.currentPage = page;
        this.currentColor = color;
        this.currentTypes = types;
      },

      error: (err) => console.error('Error', err),
    });
  }

  selectCard(card: MtgCard) {
    this.detailCard.next(card);
  }

  getSelectedCard(): Observable<MtgCard> {
    return this.detailCard$;
  }
}
