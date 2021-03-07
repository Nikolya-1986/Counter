import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { clear, countSelector, decrease, increase } from './reducers/counter';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Counter'
  updateDate?: number

  count$ = this.store.select(countSelector);//получение подписчика на состояние хранилища
  disabledButton$ = this.count$.pipe(map(count => count <= 0));
  
  constructor(private store: Store){ }

  increase(): void {
    this.updateDate = Date.now()
    this.store.dispatch(increase())//обращаясь к хранилищу пишет какой тип action проиходит
  }

  decrease(): void {
    this.updateDate = Date.now()
    this.store.dispatch(decrease())
  }

  clear(): void {
    this.updateDate = Date.now()
    this.store.dispatch(clear())
  }
}
