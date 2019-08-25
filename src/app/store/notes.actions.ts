import { createAction, props } from '@ngrx/store';
import { Note } from '../interfaces/note';

export const ADD = createAction('[Notes] add note', props<{note: Note}>());
export const REMOVE = createAction('[Notes] remove note', props<{id: number}>());
export const UPDATE = createAction('[Notes] update note', props<{note: Note}>());
