import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ADD } from 'src/app/store/notes.actions';
import { Note } from 'src/app/interfaces/note';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  titleTxt: FormControl;
  contentTxt: FormControl;

  constructor(private store: Store<AppState>) {
    this.titleTxt = new FormControl('', Validators.required);
    this.contentTxt = new FormControl('', Validators.required);
  }

  ngOnInit() {}

  createNote() {
    if (this.contentTxt.invalid || this.titleTxt.invalid) return;

    const note: Note = {
      content: this.contentTxt.value,
      title: this.titleTxt.value,
    };

    this.store.dispatch(ADD({ note }));

    this.contentTxt.reset();
    this.titleTxt.reset();
  }
}
