import { createReducer, on } from '@ngrx/store';
import * as actions from './notes.actions';
import { Note } from '../interfaces/note';

const initialState: Note[] = [
  {
    content: '- content 1',
    id: 1,
    title: 'title 1',
  },
  {
    content: '_content 2_',
    id: 2,
    title: 'title 2'
  },
  {
    content: '### content 3',
    id: 3,
    title: 'title 3'
  },
];

export const notesReducer = createReducer(
  initialState,
  on(actions.ADD, (state, { note }): Note[] => [...state, {
    ...note,
    id: state.length
      ? state.reduce((acc, curr) => acc.id < curr.id ? curr : acc).id + 1
      : 1,
  }]),
  on(actions.REMOVE, (state, { id }): Note[] => state.filter(n => n.id !== id)),
  on(actions.UPDATE, (state, { note }): Note[] => state.map(n => n.id === note.id ? note : n)),
);
