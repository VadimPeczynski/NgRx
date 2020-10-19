import { createAction, createReducer, on } from '@ngrx/store';

export const heroReducer = createReducer(
    {showTeam: true},
    on(createAction('[Hero] Toggle Team Display'), state=>{
        return {
            ...state,
            showTeam: !state.showTeam
        }
    })
);