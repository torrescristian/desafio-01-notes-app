import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as notesActions from 'src/app/store/notes.actions';
import { Note } from 'src/app/interfaces/note';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() note: Note;
  editable = false;
  titleTxt: FormControl;
  tempContent: string;

  constructor(private store: Store<AppState>) {
    this.titleTxt = new FormControl('');
  }

  handleEditItem() {
    this.editable = true;
    this.titleTxt.setValue(this.note.title);
  }

  handleDeleteItem() {
    this.store.dispatch(notesActions.REMOVE({ id: this.note.id }));
  }

  handleEndEdit() {
    this.editable = false;
    this.store.dispatch(notesActions.UPDATE({
      note: {
        ...this.note,
        title: this.titleTxt.value,
        content: this.tempContent,
      },
    }));
  }

  handleTempContent(tempContent) {
    this.tempContent = tempContent;
  }

}
