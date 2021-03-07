import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { clear, countSelector, decrease, increase, updateDateSelector } from './reducers/counter';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Counter'

  count$ = this.store.select(countSelector)//получение подписчика на состояние хранилища
  disabledButton$ = this.count$.pipe(map(count => count <= 0))
  updateDate$ = this.store.select(updateDateSelector)//хотим за селктектед updateDateSelector
  
  constructor(private store: Store){ }

  increase(): void {
    this.store.dispatch(increase())//обращаясь к хранилищу пишет какой тип action проиходит
  }

  decrease(): void {
    this.store.dispatch(decrease())
  }

  clear(): void {
    this.store.dispatch(clear())
  }
}