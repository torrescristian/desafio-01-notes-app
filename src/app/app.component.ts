import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes-app';

  constructor(private store: Store<AppState>) {
    this.store.select('notes').subscribe(notes => {
      localStorage.setItem('state', JSON.stringify(notes));
    });
  }
}
