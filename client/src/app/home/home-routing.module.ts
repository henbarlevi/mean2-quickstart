import { RouterModule } from '@angular/router'; //import router module
import { HomeComponent } from './home.component';

export const homeRouting = RouterModule.forChild([
  {
    path: 'home',
    component: HomeComponent,

  }

]);
