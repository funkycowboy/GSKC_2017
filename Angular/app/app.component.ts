import {Component} from '@angular/core'
import {PublicLayoutComponent} from './Layouts/public-layout.component';

@Component({
    selector: 'my-app',
    template:   `                
                <my-public-layout></my-public-layout>
                `
})

export class AppComponent{
    title = "GSKC Website"
}