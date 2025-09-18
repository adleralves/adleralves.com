import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class AboutComponent {
  constructor(public translationService: TranslationService) {}
}
