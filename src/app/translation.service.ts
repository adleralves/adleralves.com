import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { translations, Translations } from './translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<'pt' | 'en'>('en');
  private translationsSubject = new BehaviorSubject<Translations>(translations.en);

  currentLanguage$ = this.currentLanguageSubject.asObservable();
  translations$ = this.translationsSubject.asObservable();

  get currentLanguage(): 'pt' | 'en' {
    return this.currentLanguageSubject.value;
  }

  get translations(): Translations {
    return this.translationsSubject.value;
  }

  setLanguage(language: 'pt' | 'en') {
    this.currentLanguageSubject.next(language);
    this.translationsSubject.next(translations[language]);
  }

  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'pt' ? 'en' : 'pt';
    this.setLanguage(newLanguage);
  }
}
