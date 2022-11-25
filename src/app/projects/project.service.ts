import { Project } from './project.model';

export class ProjectService {
  projects: Project[] = [
    new Project(
      1,
      'CAL',
      'unsplash-photo-3.jpg',
      'Java',
      'HTML',
      'cal'
    ),
    new Project(
      2,
      'Book Store',
      'unsplash-photo-3.jpg',
      'Java',
      'JSP',
      'bookstore'
    ),
    new Project(
      3,
      'Fast and Furious',
      'unsplash-photo-3.jpg',
      'Angular',
      'Java',
      'fastfood'
    ),
    /*new Project(
      4,
      'OS',
      'unsplash-photo-3.jpg',
      'Java',
      'Spring',
      'osapi'
    ),*/
    new Project(
      5,
      'Portfolio',
      'unsplash-photo-4.jpg',
      'Angular',
      'Typescript',
      'portfolio'
    )
  ];

  getProjects() {
    return this.projects.slice();
  }

}
