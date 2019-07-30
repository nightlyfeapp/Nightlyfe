import { Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { EventComponent } from './components/event/event.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'events',
    component: AllEventsComponent
  },
  {
    path: 'events/:eventId',
    component: EventComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user/:userId',
    component: UserProfileComponent
  }
];

export default appRoutes;
