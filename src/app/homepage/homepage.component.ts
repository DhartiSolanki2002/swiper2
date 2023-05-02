import { Component, HostListener,ViewEncapsulation, ViewChild } from "@angular/core";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HomepageComponent {

  thumbsSwiper: any;

  slideValue: number = 4;
  slidesdata:number = 5; // set the initial value for mobile screens
  
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    const screenWidth = event.target.innerWidth;
    
    // update the value of slideValue based on the screen width
    if (screenWidth >= 768 && screenWidth < 992) {
      this.slideValue = 3;
      this.slidesdata = 3; // tablet screen size
    } else if (screenWidth >= 992) {
      this.slideValue = 4;
      this.slidesdata = 4; // desktop screen size
    } else {
      this.slideValue = 2; 
      this.slidesdata = 2; // mobile screen size
    }
  }
}
