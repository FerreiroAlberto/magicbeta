import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginatorComponent } from '../../../comp/paginator/paginator.component';
import { FilterComponent } from '../../../comp/filter/filter.component';
import { ListComponent } from '../../../comp/list/list.component';

@Component({
  selector: 'isdi-home',
  standalone: true,
  template: ` <isdi-paginator></isdi-paginator>
    <isdi-filter></isdi-filter>
    <isdi-list></isdi-list>`,
  styleUrl: './home.component.css',
  imports: [RouterModule, PaginatorComponent, FilterComponent, ListComponent],
})
export default class HomeComponent {}
