import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'myapp';

  private router = inject(Router);

  route(route: string) {
    this.router.navigate([route]);
  }
}
