import { Component } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  notes: Note[];

  constructor(private store: Store<AppState>) {
    this.store.select('notes').subscribe(notes => {
      this.notes = notes.slice().sort((a, b) => a.id < b.id ? 1 : -1);
    });
  }

  handleEditItem({editable, index}) {
    console.log(editable, index);
  }

  handleDeleteItem(index) {
    this.notes.splice(index, 1);
  }
}
