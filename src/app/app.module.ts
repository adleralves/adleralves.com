import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BookstorewebComponent } from './projects/bookstoreweb/bookstoreweb.component';
import { FastfoodComponent } from './projects/fastfood/fastfood.component';
import { OsapiComponent } from './projects/osapi/osapi.component';
import { PortfolioComponent } from './projects/portfolio/portfolio.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { CalComponent } from './projects/cal/cal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    HomeComponent,
    FooterComponent,
    FastfoodComponent,
    PortfolioComponent,
    OsapiComponent,
    BookstorewebComponent,
    ProjectListComponent,
    CalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
