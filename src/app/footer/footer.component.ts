import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true
})
export class FooterComponent {
  constructor(public translationService: TranslationService) {}

  get currentYear() {
    return new Date().getFullYear();
  }

  get copyrightText() {
    const baseText = this.translationService.translations.copyright;
    return baseText.replace('2025', this.currentYear.toString());
  }
}
