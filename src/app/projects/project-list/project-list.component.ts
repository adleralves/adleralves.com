import { Component, inject } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  standalone: true
})
export class ProjectListComponent {
  private projectService = inject(ProjectService);
  projects: Project[] = this.projectService.getProjects();
}
