import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterModule, FooterComponent]
})
export class AppComponent {
  title = 'Adler Alves';

  constructor(
    private router: Router,
    public translationService: TranslationService
  ) {}

  get currentLanguage() {
    return this.translationService.currentLanguage;
  }

  get translations() {
    return this.translationService.translations;
  }

  isActive(route: string): boolean {
    if (route === '/') {
      return this.router.url === '/' || this.router.url === '/home';
    }
    return this.router.url === route;
  }

  toggleLanguage() {
    this.translationService.toggleLanguage();
  }
}
