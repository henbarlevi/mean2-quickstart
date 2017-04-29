import { RouterModule } from '@angular/router'; //import router module
import { AboutComponent } from './about.component';

export const aboutRouting = RouterModule.forChild([
  {
    path: 'about',
    component: AboutComponent,

  }

]);
