import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Erettsegi-Kalkulator';

  constructor(private router: Router) { }

  isActive(url: string): boolean {
    return this.router.url === url;
  }
}
