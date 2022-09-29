import { Project } from './project.model';

export class ProjectService {
  projects: Project[] = [
    new Project(
      1,
      'Book Store',
      '../../../assets/adler.png',
      'Java',
      'JSP',
      'bookstore'
    ),
    new Project(
      2,
      'Fast and Furious',
      '../../../assets/adler.png',
      'Angular',
      'Java',
      'fastfood'
    ),
    new Project(
      3,
      'OS Api',
      'unsplash-photo-3.jpg',
      'Java',
      'Spring',
      'osapi'
    ),
    new Project(
      4,
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
