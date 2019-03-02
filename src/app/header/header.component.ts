import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  isDaniel = true;
  daniel = '';

  danielSkills: [
    {
      uxDesign: 'Very Strong'
    }
    ];

  onFasie() {
    console.log('hello');
  }
}
