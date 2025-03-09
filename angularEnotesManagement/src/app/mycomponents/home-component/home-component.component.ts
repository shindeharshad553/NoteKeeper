import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  constructor(private titleService:Title){
    titleService.setTitle('Home');
  }
}
