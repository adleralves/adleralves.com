import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { FastfoodComponent } from './projects/fastfood/fastfood.component';
import { PortfolioComponent } from './projects/portfolio/portfolio.component';
import { OsapiComponent } from './projects/osapi/osapi.component';
import { BookstorewebComponent } from './projects/bookstoreweb/bookstoreweb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    HomeComponent,
    FooterComponent,
    ProjectComponent,
    FastfoodComponent,
    PortfolioComponent,
    OsapiComponent,
    BookstorewebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
