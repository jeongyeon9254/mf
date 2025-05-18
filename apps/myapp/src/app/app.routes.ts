import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'page', component: PageComponent },
      {
        path: 'app2',
        loadChildren: () =>
          import('../../../myapp2/src/app/app.routes').then((m) => m.appRoutes),
      },
    ],
  },
];
