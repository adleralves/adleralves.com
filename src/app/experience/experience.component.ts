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
      description: 'Desenvolvimento de sistemas de testes, integração e automação para a indústria aeronáutica. Participação no desenvolvimento de RIGs, HIL e bancadas de teste para aeronaves militares, executivas e comerciais.',
      technologies: ['LabVIEW', 'PXI', 'Python', 'SQL', 'C/C++', 'ARINC-429', 'MIL-STD-1553']
    },
    {
      company: 'Empresa Anterior',
      position: 'Software Engineer',
      period: '2020 - 2023',
      description: 'Desenvolvimento de software para sistemas embarcados e automação industrial.',
      technologies: ['C++', 'Python', 'Linux', 'Embedded Systems']
    }
  ];
}
