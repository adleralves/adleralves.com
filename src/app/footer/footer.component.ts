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

  get copyrightText() {
    return this.translationService.translations.copyright;
  }
}
