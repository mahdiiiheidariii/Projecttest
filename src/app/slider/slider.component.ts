import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

declare var Swiper: any;

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {

    }

    ngAfterViewInit(): void {
        const mySwiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'), {
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            },
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                loop: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
        });
    }


}
