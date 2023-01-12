import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  condition:boolean = false;

  updateCounter() {
    this.counter += 1;
    this.condition = !this.condition;
  }
}
