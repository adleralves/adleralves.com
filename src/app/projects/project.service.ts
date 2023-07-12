import { Project } from './project.model';

export class ProjectService {
  projects: Project[] = [
    new Project(1, 'CAL', 'unsplash-photo-3.jpg', 'Java', 'HTML'),
    new Project(2, 'OS', 'unsplash-photo-3.jpg', 'Java', 'Spring'),
    new Project(3, 'Book Store', 'unsplash-photo-3.jpg', 'Java', 'JSP'),
    new Project(
      4,
      'Fast and Furious',
      'unsplash-photo-3.jpg',
      'Angular',
      'Java'
    ),
    new Project(
      5,
      'Portfolio',
      'unsplash-photo-4.jpg',
      'Angular',
      'Typescript'
    ),
  ];

  getProjects() {
    return this.projects.slice();
  }
}
