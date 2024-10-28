import { Routes } from '@angular/router';
import { OwnerRegistrationComponent } from './owner-registration/owner-registration.component';
import { PetRegistrationComponent } from './pet-registration/pet-registration.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
  
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
      },
    {
      path: 'owner-registration',
      component: OwnerRegistrationComponent,
      title: 'Owner Registration page'
    },
    {
      path: 'pet-registration',
      component: PetRegistrationComponent,
      title: 'Pet Registration page'
    },
    {
        path: 'book-appointment',
        component: BookAppointmentComponent,
        title: 'Book Appointment page'
      }
    
  ];
  
  export default routeConfig;