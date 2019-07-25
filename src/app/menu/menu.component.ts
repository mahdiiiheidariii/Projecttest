import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems = [{name: 'خانه'}, {name: 'محصولات'}, {name: 'مقالات'}, {name: 'دریاره ما'}]
  constructor() { }

  ngOnInit() {
  }

}
