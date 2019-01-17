
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { NavigationComponent } from './webSiteComponents/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './webSiteComponents/home/home.component';
import { JumbotronComponent } from './webSiteComponents/jumbotron/jumbotron.component';
import { FeaturesComponent } from './webSiteComponents/features/features.component';
import { ProjectsComponent } from './webSiteComponents/projects/projects.component';
import { FooterComponent } from './webSiteComponents/footer/footer.component';
import { AddCarComponent } from './appComponents/add-car/add-car.component';
import { AddContactComponent } from './appComponents/add-contact/add-contact.component';
import { ManageCarsComponent } from './appComponents/manage-cars/manage-cars.component';
import { ManageContactsComponent } from './appComponents/manage-contacts/manage-contacts.component';
import { DashboardComponent } from './appComponents/dashboard/dashboard.component';
import { AppNavigationComponent } from './appComponents/app-navigation/app-navigation.component';
import { AppFooterComponent } from './appComponents/app-footer/app-footer.component';
import { RegisterComponent } from './authComponents/register/register.component';
import { LoginComponent } from './authComponents/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    JumbotronComponent,
    FeaturesComponent,
    ProjectsComponent,
    FooterComponent,
    AddCarComponent,
    AddContactComponent,
    ManageCarsComponent,
    ManageContactsComponent,
    DashboardComponent,
    AppNavigationComponent,
    AppFooterComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    AppRoutingModule
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
