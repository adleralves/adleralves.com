import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BookstorewebComponent } from './projects/bookstoreweb/bookstoreweb.component';
import { CalComponent } from './projects/cal/cal.component';
import { FastfoodComponent } from './projects/fastfood/fastfood.component';
import { OsapiComponent } from './projects/osapi/osapi.component';
import { PortfolioComponent } from './projects/portfolio/portfolio.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      { path: '', component: ProjectListComponent },
      { path: 'bookstore', component: BookstorewebComponent },
      { path: 'fastfood', component: FastfoodComponent },
      { path: 'osapi', component: OsapiComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'cal', component: CalComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
