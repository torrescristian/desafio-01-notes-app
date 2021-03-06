import { ActionReducerMap } from '@ngrx/store';
import { Note } from './interfaces/note';
import { reducer as notesReducer } from './store/notes.reducers';

export interface AppState {
    notes: Note[];
}

export const appReducers: ActionReducerMap<AppState> = {
    notes: notesReducer,
};
