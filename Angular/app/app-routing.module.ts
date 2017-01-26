import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {ContactComponent} from './Content/contact.component'
import {HomeComponent} from './Content/home.component'
import {SupportComponent} from './Content/support.component'

const appRoutes: Routes = [
    
    {   path: 'home',
        component: HomeComponent
    }, 
    {   path: 'support',
        component: SupportComponent
    },
    {   path: 'contact-us',
        component: ContactComponent
    },   
    {   path: '', 
        redirectTo: '/home',
        pathMatch: 'full'
    },

]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}