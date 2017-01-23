import { Component, Input } from '@angular/core';
 
@Component({
  moduleId: module.id,
  selector: 'home-carousel',
  templateUrl: 'home-carousel.component.html'
})

export class HomeCarouselComponent {
@Input() imageData: any

}