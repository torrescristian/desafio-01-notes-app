import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './notes.actions';
import { Note } from '../interfaces/note';

const initialState: Note[] = JSON.parse(localStorage.getItem('state')) as Note[] || [
  {
    content: '- Contenido 1',
    id: 1,
    title: 'Título 1',
  },
  {
    content: '_Contenido 2_',
    id: 2,
    title: 'Título 2'
  },
  {
    content: '### Contenido 3',
    id: 3,
    title: 'Título 3'
  },
];

const notesReducer = createReducer(
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

export function reducer(state: Note[] | undefined, action: Action) {
  return notesReducer(state, action);
}
