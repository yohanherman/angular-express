import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'employees', component: EmployeesComponent},
    { path: 'about', component: AboutComponent},
];
