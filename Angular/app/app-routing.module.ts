import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {ContactComponent} from './Content/contact/contact.component'
import {HomeComponent} from './Content/home/home.component'
import {SupportComponent} from './Content/support/support.component'
import {SearchResultsComponent} from './Content/search-results/search-results.component'

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
    {   path: 'search', 
        component: SearchResultsComponent
    },
    {   path: '', 
        redirectTo: '/home',
        pathMatch: 'full'
    }
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