import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { changeUpdateData, clear, decrease, increase } from './reducers/counter';

@Injectable()
export class AppEffects {

  updateDate$ = createEffect(() => this.actions$.pipe(
    ofType(increase, decrease, clear),//передаём в этот метод actoins
    map(() => changeUpdateData({updateDate: Date.now()}))//если сработал хоть один из action, то необходимо его подменить на updateDate в данном эфекте
  ));

  constructor(private actions$: Actions) {}
}