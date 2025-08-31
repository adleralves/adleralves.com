import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterModule, FooterComponent]
})
export class AppComponent {
  title = 'Adler Alves';

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    if (route === '/') {
      return this.router.url === '/' || this.router.url === '/home';
    }
    return this.router.url === route;
  }
}
