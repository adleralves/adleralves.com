import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Embraer',
      position: 'Computer Technique',
      period: '2023 - Present',
      description: 'Responsável pela configuração e montagem da parte computacional de RIGs, HIL e bancadas de teste para aeronaves.',
      technologies: ['LabVIEW', 'PXI', 'SQL', 'ARINC-429']
    },
    {
      company: 'Embraer',
      position: 'Entry-Level Programmer',
      period: '2021 - 2023',
      description: 'Participação no desenvolvimento inicial de um projeto de aplicação web, auxílio no desenvolvimento front-end e back-end.',
      technologies: ['Angular', 'TypeScript', 'Figma']
    },
    {
      company: 'Monsuco',
      position: 'Web Designer',
      period: '2020 - Present',
      description: 'Responsável pela identidade visual, layout e estruturação do site da empresa.',
      technologies: ['Photoshop', 'HTML', 'CSS']
    }
  ];
}
