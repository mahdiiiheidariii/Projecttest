import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    active = 0;

    menuItems = [{name: 'خانه'}, {name: 'محصولات'}, {name: 'مقالات'}, {name: 'درباره ما'}]

    constructor() {
    }

    ngOnInit() {
    }

    isActive(i) {
        this.active = i;
    }
}
