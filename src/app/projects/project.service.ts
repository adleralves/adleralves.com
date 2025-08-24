import { Injectable, signal } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsSignal = signal<Project[]>([
    { id: 1, name: 'CAL', image: 'unsplash-photo-3.jpg', language1: 'Java', language2: 'HTML' },
    { id: 2, name: 'OS', image: 'unsplash-photo-3.jpg', language1: 'Java', language2: 'Spring' },
    { id: 3, name: 'Book Store', image: 'unsplash-photo-3.jpg', language1: 'Java', language2: 'JSP' },
    { id: 4, name: 'Fast and Furious', image: 'unsplash-photo-3.jpg', language1: 'Angular', language2: 'Java' },
    { id: 5, name: 'Portfolio', image: 'unsplash-photo-4.jpg', language1: 'Angular', language2: 'Typescript' },
  ]);

  getProjects() {
    return this.projectsSignal();
  }

  addProject(project: Project) {
    this.projectsSignal.update(projects => [...projects, project]);
  }
}
