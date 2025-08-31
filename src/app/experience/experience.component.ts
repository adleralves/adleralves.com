import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ExperienceComponent {
  constructor(public translationService: TranslationService) {}

  get experiences() {
    const translations = this.translationService.translations;
    return [
      {
        company: 'Embraer',
        position: translations.computerTechnique,
        period: '2023 - Present',
        description: translations.computerTechniqueDesc,
        technologies: ['LabVIEW', 'PXI', 'SQL', 'ARINC-429']
      },
      {
        company: 'Embraer',
        position: translations.entryLevelProgrammer,
        period: '2021 - 2023',
        description: translations.entryLevelProgrammerDesc,
        technologies: ['Angular', 'TypeScript', 'Figma']
      },
      {
        company: 'Monsuco',
        position: translations.webDesigner,
        period: '2020 - Present',
        description: translations.webDesignerDesc,
        technologies: ['Photoshop', 'HTML', 'CSS']
      }
    ];
  }
}
