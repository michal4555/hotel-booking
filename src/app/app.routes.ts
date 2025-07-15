import { Routes } from '@angular/router';
import { ReceptionComponent } from './pages/reception/reception.Component';
import { Login } from './pages/login/login';
import { Register } from './pages/Register/register';
import { User } from './pages/user/user';
import { register } from 'module';

export const routes: Routes = [
  { path: 'reception', component: ReceptionComponent },
   {path :'user',component:User},
  { path: 'login', component: Login },
   {path: 'register',component: Register },
 

  { path: '', redirectTo: 'reception', pathMatch: 'full' }
];
