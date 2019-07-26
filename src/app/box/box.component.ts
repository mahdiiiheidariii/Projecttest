import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
    @Input() data = {
        src: '../../assets/images/webdesign10-11.jpg', title: 'طراحی و تو سعه',
        link: 'http://google.com',
        text: ' شرکت ما  مدت زمان طولانی درزمینه طراحی' +
        ' و بهینه سازی و سئوی سایت فعالیت دارد' +
        ' که بطورمداوم دراین خصوص بصورت حرفه ای و تخصصی فعال است و هم اکنون با همکاری' +
        ' و پشتوانه پرسنل ماهر، با قدرتی بیش از پیش در خدمت طراحی سایت در تمام  ایران می باشد.\n'
    };

    constructor() {
    }

    ngOnInit() {
    }


}
