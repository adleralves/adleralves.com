import { Component } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [ProjectListComponent]
})
export class ProjectsComponent {
}
