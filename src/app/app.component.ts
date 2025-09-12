import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, FooterComponent, LoadingComponent]
})
export class AppComponent implements OnInit {
  title = 'Adler Alves';
  isLoading = true;

  constructor(
    private router: Router,
    public translationService: TranslationService
  ) {}

  ngOnInit() {
    // Simula o carregamento inicial
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // 2 segundos de loading
  }

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
