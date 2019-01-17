import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './webSiteComponents/home/home.component';
import { DashboardComponent } from './appComponents/dashboard/dashboard.component';
import { AddCarComponent } from './appComponents/add-car/add-car.component';
import { AddContactComponent } from './appComponents/add-contact/add-contact.component';
import { ManageCarsComponent } from './appComponents/manage-cars/manage-cars.component';
import {ManageContactsComponent} from './appComponents/manage-contacts/manage-contacts.component';
import { RegisterComponent } from './authComponents/register/register.component';
import { LoginComponent } from './authComponents/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addCar', component: AddCarComponent },
  { path: 'addContact', component: AddContactComponent },
  { path: 'manageContacts', component: ManageContactsComponent },
  { path: 'manageCars', component: ManageCarsComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
