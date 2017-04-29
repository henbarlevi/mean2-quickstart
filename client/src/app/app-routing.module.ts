import { RouterModule } from '@angular/router'; //import router module

//https://angular.io/docs/ts/latest/guide/router.html#!#named-outlets
export const appRouting = RouterModule.forRoot([
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' 
  }
]);
