import { TestComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {KWayComponent} from './k-way/k-way.component';
import {AssociativeComponent} from './associative/associative.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
 


const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'k-way', component: KWayComponent},
  { path: 'associative', component: AssociativeComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'home', component: HomeComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  ]

  export const AppRoutesModule = RouterModule.forRoot(appRoutes)