import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Counter'
  counter = 0
  updateDate?: number


  get disabledButton(): boolean {
    return this.counter <= 0
  }

  increase(): void {
    this.updateDate = Date.now()
    this.counter++
  }

  decrease(): void {
    this.updateDate = Date.now()
    this.counter--
  }

  clear(): void {
    this.updateDate = Date.now()
    this.counter = 0
  }
}
