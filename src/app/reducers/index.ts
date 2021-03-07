import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {counterReducer, CounterState} from './counter';

export interface State {//подключение интерфейса для счётчика
  counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];