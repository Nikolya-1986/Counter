import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export const increase = createAction('[COUNTER] increase')//создаём action
export const decrease = createAction('[COUNTER] decrease')
export const clear = createAction('[COUNTER] clear')

export interface CounterState {//интерфейс для счётчика
    count: number
}

export const initialState: CounterState = {//начальное состояние счётчика
    count: 0
}

export const counterReducer = createReducer (//новое изменёное состояние
    initialState,
    on(increase, state => ({//принимает функцию в данном случает increase и функцию обратного вызова котора вернёт новый state
        ...state,//разворачиваем state наслучай если будут добавлены ещё переменные
        count: state.count + 1//во время increase берём старый state, ОБЯЗАТЕЛЬНО копируем его и меняем его одно свойство
    })),
    on(decrease, state => ({
        ...state,
        count: state.count - 1
    })),
    on(clear, state => ({
        ...state,
        count: 0
    }))
);

export const featureSelector//селектор который будет возвращать определённый стэйт, с типом данных CounterState и ключом counter
  = createFeatureSelector<CounterState>('counter');
export const countSelector = createSelector(
  featureSelector,
  state => state.count
);