import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from '../core/views/home/home.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  template: `<router-outlet />`,
  styles: ``,
  imports: [RouterOutlet, HomeComponent],
})
export class AppComponent {}
