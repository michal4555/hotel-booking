import { Routes } from '@angular/router';
import { ReceptionComponent } from './pages/reception/reception.Component';
import { Login } from './pages/login/login';
import { Register } from './pages/Register/register';
import { User } from './pages/user/user';
import { ManagerPageComponent } from './pages/manager/manager-page';
import { HomeComponent } from './pages/home/home';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'reception', component: ReceptionComponent },
   {path :'user',component:User},
  { path: 'login', component: Login },
   {path: 'register',component: Register },
  { path: 'app', component: ManagerPageComponent },
  { path: 'manager-page', component: ManagerPageComponent },
    { path: '', component: HomeComponent },
 { path: 'manager', component: ManagerPageComponent },  
  { path: 'reservation/:roomId', component: ReservationPageComponent },
{ path: 'reservation-page', component: ReservationPageComponent },
 { path: 'home', component: HomeComponent },
];
